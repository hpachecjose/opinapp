import os
import ast
import json
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional
from dataclasses import dataclass
from collections import Counter, defaultdict
import datetime
import re

# Tentativa de importar módulos opcionais com fallback
try:
    import yaml
    YAML_AVAILABLE = True
except ImportError:
    YAML_AVAILABLE = False

try:
    import tomllib
    TOML_AVAILABLE = True
except ImportError:
    try:
        import tomli as tomllib
        TOML_AVAILABLE = True
    except ImportError:
        TOML_AVAILABLE = False

@dataclass
class CodeMetrics:
    lines: int = 0
    classes: int = 0
    functions: int = 0
    imports: int = 0
    comments: int = 0
    complexity: int = 0
    todo_count: int = 0

@dataclass
class SecurityIssue:
    file_path: str
    line_number: int
    issue_type: str
    description: str
    severity: str

class BackendAnalyzer:
    def __init__(self, backend_path: str = None):
        if backend_path is None:
            self.backend_path = self.auto_detect_backend()
        else:
            self.backend_path = Path(backend_path).resolve()
            
        print(f"🎯 Analisando: {self.backend_path}")
        
        self.ignore_dirs = {'venv', '__pycache__', 'node_modules', '.git', '.pytest_cache', '.mypy_cache', 'dist', 'build'}
        self.ignore_files = {'.DS_Store', 'thumbs.db'}
        
        self.file_categories = {
            'python': ['.py'],
            'database': ['.sql', '.db', '.sqlite', '.sqlite3'],
            'config': ['.json', '.yaml', '.yml', '.toml', '.ini', '.cfg', '.conf'],
            'documentation': ['.md', '.rst', '.txt'],
            'environment': ['.env', '.env.example'],
            'requirements': ['.txt', '.in'],
            'templates': ['.html', '.jinja', '.jinja2'],
            'static': ['.css', '.js', '.scss', '.less'],
            'tests': ['_test.py', 'test_.py', 'conftest.py']
        }
        
        self.security_patterns = {
            'high': [
                (r'eval\s*\(', 'Uso de eval() - Risco de injeção de código'),
                (r'exec\s*\(', 'Uso de exec() - Risco de injeção de código'),
                (r'os\.system\s*\(', 'Uso de os.system() - Risco de injeção de comandos'),
                (r'subprocess\.call\s*\(', 'Uso de subprocess.call() - Risco de injeção'),
                (r'password.*=.*["\'].*["\']', 'Senha hardcoded no código'),
                (r'secret_key.*=.*["\'].*["\']', 'Chave secreta hardcoded'),
                (r'database_url.*=.*["\'].*["\']', 'URL de banco hardcoded'),
            ],
            'medium': [
                (r'input\s*\(', 'Uso de input() em produção'),
                (r'assert\s+.*password', 'Assert com senha - Remove em otimização'),
                (r'debug.*=.*True', 'Debug mode ativado'),
            ],
            'low': [
                (r'print\s*\(', 'Uso de print() - Considere usar logging'),
                (r'# TODO', 'TODO no código'),
                (r'# FIXME', 'FIXME no código'),
                (r'# HACK', 'HACK no código'),
            ]
        }

    def auto_detect_backend(self) -> Path:
        """Detecta automaticamente o diretório do backend"""
        current_dir = Path.cwd()
        print(f"🔍 Detectando backend a partir de: {current_dir}")
        
        # Possíveis locais do backend
        possible_paths = [
            current_dir,  # Diretório atual pode ser o backend
            current_dir / 'backend',
            current_dir / 'app',
            current_dir / 'src',
            current_dir / 'api',
            current_dir.parent / 'backend',  # Pasta irmã
            current_dir.parent / 'api',
        ]
        
        # Indicadores de que é um backend Python
        backend_indicators = [
            'requirements.txt',
            'manage.py',  # Django
            'app.py', 'main.py', 'application.py',  # Flask/FastAPI
            'models', 'views', 'controllers', 'routes',
            'migrations', 'settings.py', 'wsgi.py'
        ]
        
        best_match = None
        best_score = 0
        
        for path in possible_paths:
            if not path.exists():
                continue
                
            score = 0
            print(f"  📁 Verificando: {path}")
            
            # Verifica arquivos indicadores
            for indicator in backend_indicators:
                indicator_path = path / indicator
                if indicator_path.exists():
                    score += 2
                    print(f"    ✅ {indicator}")
            
            # Verifica arquivos Python
            python_files = list(path.rglob('*.py'))
            if python_files:
                score += len(python_files) / 10  # Bônus por quantidade de arquivos Python
                print(f"    📄 {len(python_files)} arquivos Python")
            
            if score > best_score:
                best_score = score
                best_match = path
        
        if best_match:
            print(f"🎯 Backend detectado: {best_match} (score: {best_score})")
            return best_match
        else:
            print("⚠️  Não foi possível detectar o backend automaticamente, usando diretório atual")
            return current_dir

    def get_file_category(self, file_path: Path) -> str:
        """Categoriza arquivos baseado na extensão e nome"""
        suffix = file_path.suffix.lower()
        name = file_path.name.lower()
        
        for category, extensions in self.file_categories.items():
            if suffix in extensions:
                return category
                
        for pattern, category in [('test', 'tests'), ('conftest', 'tests')]:
            if pattern in name:
                return category
                
        return 'outros'

    def analyze_python_file(self, file_path: Path) -> CodeMetrics:
        """Análise profunda de arquivos Python"""
        metrics = CodeMetrics()
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                lines = content.split('\n')
                metrics.lines = len(lines)
                
                # Contagem básica
                metrics.comments = len([l for l in lines if l.strip().startswith('#')])
                metrics.todo_count = len([l for l in lines if 'TODO' in l or 'FIXME' in l])
                
                # Análise AST
                try:
                    tree = ast.parse(content)
                    
                    # Contagem de classes, funções e imports
                    metrics.classes = len([node for node in ast.walk(tree) if isinstance(node, ast.ClassDef)])
                    metrics.functions = len([node for node in ast.walk(tree) if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))])
                    metrics.imports = len([node for node in ast.walk(tree) if isinstance(node, (ast.Import, ast.ImportFrom))])
                    
                    # Complexidade ciclomática simples
                    complexity_nodes = (ast.If, ast.For, ast.While, ast.Try, ast.With, ast.AsyncWith)
                    metrics.complexity = len([node for node in ast.walk(tree) if isinstance(node, complexity_nodes)])
                    
                except SyntaxError:
                    # Arquivo com sintaxe inválida, usa contagem básica
                    pass
                    
        except Exception as e:
            # Silencia erros de leitura
            pass
            
        return metrics

    def find_security_issues(self, file_path: Path) -> List[SecurityIssue]:
        """Detecta possíveis issues de segurança"""
        issues = []
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                lines = content.split('\n')
                
                for severity, patterns in self.security_patterns.items():
                    for pattern, description in patterns:
                        for line_num, line in enumerate(lines, 1):
                            if re.search(pattern, line, re.IGNORECASE):
                                issues.append(SecurityIssue(
                                    file_path=str(file_path),
                                    line_number=line_num,
                                    issue_type=severity.upper(),
                                    description=description,
                                    severity=severity
                                ))
        except Exception:
            pass
            
        return issues

    def analyze_dependencies(self) -> Dict[str, Any]:
        """Análise completa de dependências"""
        dependencies = {
            'python': {},
            'node': {},
            'system': {}
        }
        
        # Python dependencies
        req_files = list(self.backend_path.rglob('*requirements*.txt')) + \
                   list(self.backend_path.rglob('Pipfile')) + \
                   list(self.backend_path.rglob('pyproject.toml'))
        
        for req_file in req_files:
            try:
                if req_file.name == 'Pipfile' and not TOML_AVAILABLE:
                    # Tenta análise básica do Pipfile
                    with open(req_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '[packages]' in content:
                            dependencies['python']['pipfile'] = 'Encontrado (análise básica)'
                
                elif req_file.name == 'pyproject.toml' and TOML_AVAILABLE:
                    with open(req_file, 'rb') as f:
                        pyproject = tomllib.load(f)
                        if 'project' in pyproject and 'dependencies' in pyproject['project']:
                            dependencies['python']['pyproject'] = len(pyproject['project']['dependencies'])
                        elif 'tool' in pyproject and 'poetry' in pyproject['tool']:
                            dependencies['python']['poetry'] = 'Configuração Poetry encontrada'
                
                elif 'requirements' in req_file.name:
                    with open(req_file, 'r', encoding='utf-8') as f:
                        packages = [line.strip() for line in f if line.strip() and not line.startswith('#')]
                        dependencies['python'][req_file.name] = len(packages)
                        
            except Exception:
                # Fallback para análise básica
                if req_file.name in ['Pipfile', 'pyproject.toml']:
                    dependencies['python'][req_file.name] = 'Arquivo encontrado (análise limitada)'
        
        # Node.js dependencies
        package_json = self.backend_path / 'package.json'
        if package_json.exists():
            try:
                with open(package_json, 'r', encoding='utf-8') as f:
                    package_data = json.load(f)
                    if 'dependencies' in package_data:
                        dependencies['node']['dependencies'] = len(package_data['dependencies'])
                    if 'devDependencies' in package_data:
                        dependencies['node']['devDependencies'] = len(package_data['devDependencies'])
            except Exception:
                dependencies['node']['package.json'] = 'Arquivo encontrado (erro na análise)'
                
        return dependencies

    def analyze_database(self) -> Dict[str, Any]:
        """Análise de configurações de banco de dados"""
        db_analysis = {
            'engines': set(),
            'config_files': [],
            'migrations': [],
            'models': []
        }
        
        # Procura por configurações de DB
        for file_path in self.backend_path.rglob('*'):
            if file_path.is_file():
                # Ignora diretórios
                if any(part in self.ignore_dirs for part in file_path.parts):
                    continue
                    
                try:
                    content = file_path.read_text(encoding='utf-8', errors='ignore').lower()
                    
                    # Detecta engines de banco
                    engines = ['sqlite', 'postgresql', 'mysql', 'oracle', 'sqlserver', 'mongodb']
                    for engine in engines:
                        if engine in content:
                            db_analysis['engines'].add(engine)
                            
                    # Arquivos de configuração
                    if any(keyword in content for keyword in ['database', 'db_', 'sqlalchemy', 'engine']):
                        db_analysis['config_files'].append(str(file_path))
                        
                except Exception:
                    pass
        
        # Migrations
        mig_folders = list(self.backend_path.rglob('migrations'))
        for mig_folder in mig_folders:
            if mig_folder.is_dir():
                db_analysis['migrations'].extend([
                    str(f) for f in mig_folder.rglob('*.py') 
                    if f.name not in ['__init__.py'] and not any(part in self.ignore_dirs for part in f.parts)
                ])
        
        # Models
        model_files = list(self.backend_path.rglob('*models*.py')) + \
                     list(self.backend_path.rglob('*/models/*.py'))
        db_analysis['models'] = [
            str(f) for f in model_files 
            if f.is_file() and not any(part in self.ignore_dirs for part in f.parts)
        ]
        
        return db_analysis

    def calculate_project_stats(self) -> Dict[str, Any]:
        """Calcula estatísticas gerais do projeto"""
        stats = {
            'total_files': 0,
            'total_size': 0,
            'file_types': Counter(),
            'categories': Counter(),
            'python_metrics': defaultdict(lambda: CodeMetrics()),
            'security_issues': []
        }
        
        for file_path in self.backend_path.rglob('*'):
            if file_path.is_file():
                # Ignora diretórios e arquivos
                if any(part in self.ignore_dirs for part in file_path.parts):
                    continue
                if file_path.name in self.ignore_files:
                    continue
                    
                stats['total_files'] += 1
                stats['total_size'] += file_path.stat().st_size
                
                # Categorização
                category = self.get_file_category(file_path)
                stats['categories'][category] += 1
                stats['file_types'][file_path.suffix.lower()] += 1
                
                # Análise específica por tipo
                if file_path.suffix == '.py':
                    metrics = self.analyze_python_file(file_path)
                    stats['python_metrics'][str(file_path)] = metrics
                    
                    # Issues de segurança
                    stats['security_issues'].extend(self.find_security_issues(file_path))
        
        return stats

    def _generate_tree_structure(self, max_depth: int = 3) -> str:
        """Gera uma estrutura de árvore do projeto"""
        lines = []
        
        def build_tree(path: Path, prefix: str = "", depth: int = 0):
            if depth > max_depth:
                lines.append(f"{prefix}... (profundidade limitada)")
                return
                
            if path.is_dir():
                # Ignora diretórios
                if path.name in self.ignore_dirs or any(part in self.ignore_dirs for part in path.parts):
                    return
                    
                children = sorted([p for p in path.iterdir() if p.name not in self.ignore_files])
                # Filtra children para ignorar diretórios
                children = [p for p in children if not (p.is_dir() and p.name in self.ignore_dirs)]
                
                dirs = [p for p in children if p.is_dir()]
                files = [p for p in children if p.is_file()]
                
                if depth == 0:
                    lines.append(f"{path.name}/")
                else:
                    lines.append(f"{prefix}{path.name}/")
                
                for i, dir_path in enumerate(dirs):
                    is_last = i == len(dirs) - 1 and not files
                    new_prefix = prefix + ("    " if is_last else "│   ")
                    build_tree(dir_path, new_prefix, depth + 1)
                    
                for i, file_path in enumerate(files):
                    is_last = i == len(files) - 1
                    lines.append(f"{prefix}{'└── ' if is_last else '├── '}{file_path.name}")
        
        build_tree(self.backend_path)
        return '\n'.join(lines)

    def generate_markdown_report(self) -> str:
        """Gera relatório completo em Markdown"""
        print("🔍 Analisando projeto...")
        
        stats = self.calculate_project_stats()
        dependencies = self.analyze_dependencies()
        db_analysis = self.analyze_database()
        
        report = []
        report.append("# 📊 Relatório Completo do Backend")
        report.append(f"**Data de geração:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append(f"**Diretório analisado:** `{self.backend_path}`")
        
        # Informações de módulos disponíveis
        report.append("\n**Módulos disponíveis:**")
        report.append(f"- YAML: {'✅' if YAML_AVAILABLE else '❌'}")
        report.append(f"- TOML: {'✅' if TOML_AVAILABLE else '❌'}")
        report.append("")
        
        # Estatísticas Gerais
        report.append("## 📈 Estatísticas Gerais")
        report.append("")
        report.append(f"- **Total de arquivos:** {stats['total_files']}")
        report.append(f"- **Tamanho total:** {stats['total_size'] / 1024 / 1024:.2f} MB")
        report.append("")
        
        report.append("### 📁 Distribuição por Categoria")
        for category, count in stats['categories'].most_common():
            report.append(f"- **{category.title()}:** {count} arquivos")
        report.append("")
        
        report.append("### 📄 Tipos de Arquivo (Top 10)")
        for file_type, count in stats['file_types'].most_common(10):
            if file_type:  # Ignora arquivos sem extensão
                report.append(f"- `{file_type}`: {count}")
        report.append("")
        
        # Análise Python
        python_files = {k: v for k, v in stats['python_metrics'].items() if v.lines > 0}
        if python_files:
            report.append("## 🐍 Análise Python")
            report.append("")
            
            total_lines = sum(m.lines for m in python_files.values())
            total_classes = sum(m.classes for m in python_files.values())
            total_functions = sum(m.functions for m in python_files.values())
            total_todos = sum(m.todo_count for m in python_files.values())
            avg_complexity = sum(m.complexity for m in python_files.values()) / len(python_files) if python_files else 0
            
            report.append(f"- **Arquivos Python:** {len(python_files)}")
            report.append(f"- **Total de linhas:** {total_lines}")
            report.append(f"- **Classes:** {total_classes}")
            report.append(f"- **Funções/Métodos:** {total_functions}")
            report.append(f"- **TODOs/FIXMEs:** {total_todos}")
            report.append(f"- **Complexidade média:** {avg_complexity:.1f}")
            report.append("")
            
            # Top 10 arquivos mais complexos
            if python_files:
                report.append("### 🎯 Arquivos Mais Complexos")
                complex_files = sorted(
                    [(path, metrics.complexity) for path, metrics in python_files.items()],
                    key=lambda x: x[1], reverse=True
                )[:10]
                
                for path, complexity in complex_files:
                    rel_path = Path(path).relative_to(self.backend_path)
                    report.append(f"- `{rel_path}`: {complexity} pontos de complexidade")
                report.append("")
        
        # Dependências
        report.append("## 📦 Dependências")
        report.append("")
        
        has_dependencies = False
        for lang, deps in dependencies.items():
            if deps:
                has_dependencies = True
                report.append(f"### {lang.title()}")
                for dep_type, info in deps.items():
                    report.append(f"- **{dep_type}:** {info}")
                report.append("")
        
        if not has_dependencies:
            report.append("Nenhuma dependência detectada.\n")
        
        # Banco de Dados
        report.append("## 🗄️ Análise de Banco de Dados")
        report.append("")
        
        has_db_info = False
        if db_analysis['engines']:
            has_db_info = True
            report.append(f"- **Engines detectados:** {', '.join(db_analysis['engines'])}")
        if db_analysis['config_files']:
            has_db_info = True
            report.append(f"- **Arquivos de configuração:** {len(db_analysis['config_files'])}")
        if db_analysis['migrations']:
            has_db_info = True
            report.append(f"- **Migrations:** {len(db_analysis['migrations'])}")
        if db_analysis['models']:
            has_db_info = True
            report.append(f"- **Arquivos de modelo:** {len(db_analysis['models'])}")
        
        if not has_db_info:
            report.append("Nenhuma configuração de banco de dados detectada.")
        report.append("")
        
        # Segurança
        if stats['security_issues']:
            report.append("## 🛡️ Análise de Segurança")
            report.append("")
            
            by_severity = defaultdict(list)
            for issue in stats['security_issues']:
                by_severity[issue.severity].append(issue)
            
            for severity in ['high', 'medium', 'low']:
                if severity in by_severity:
                    report.append(f"### {severity.title()} Severity ({len(by_severity[severity])} issues)")
                    for issue in by_severity[severity][:5]:
                        rel_path = Path(issue.file_path).relative_to(self.backend_path)
                        report.append(f"- `{rel_path}:{issue.line_number}` - {issue.description}")
                    if len(by_severity[severity]) > 5:
                        report.append(f"  *... e mais {len(by_severity[severity]) - 5} issues*")
                    report.append("")
        
        # Estrutura de Diretórios
        report.append("## 📂 Estrutura do Projeto")
        report.append("```")
        report.append(self._generate_tree_structure())
        report.append("```")
        
        return '\n'.join(report)

    def save_report(self, output_file: str = None) -> str:
        """Salva o relatório em arquivo"""
        if output_file is None:
            output_file = self.backend_path / "backend_analysis_report.md"
        else:
            output_file = Path(output_file)
        
        report_content = self.generate_markdown_report()
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        return str(output_file)

def main():
    """Função principal"""
    import sys
    
    print("🚀 Iniciando análise de backend...")
    
    # Usa detecção automática ou caminho fornecido
    if len(sys.argv) > 1:
        backend_path = sys.argv[1]
        analyzer = BackendAnalyzer(backend_path)
    else:
        print("💡 Dica: Você pode fornecer o caminho como argumento: python project_report.py /caminho/para/backend")
        analyzer = BackendAnalyzer()  # Detecção automática
    
    print("⏳ Analisando projeto... Isso pode levar alguns segundos...")
    
    try:
        report_file = analyzer.save_report()
        
        print(f"✅ Relatório gerado com sucesso: {report_file}")
        print("\n📊 O relatório inclui:")
        print("   - Estatísticas gerais do projeto")
        print("   - Análise de código Python")
        print("   - Dependências e configurações")
        print("   - Análise de segurança")
        print("   - Estrutura completa do projeto")
        
    except Exception as e:
        print(f"❌ Erro durante a análise: {e}")
        print("💡 Execute o script no diretório do projeto ou forneça o caminho correto")

if __name__ == "__main__":
    main()