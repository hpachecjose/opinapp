# 📊 Relatório Completo do Backend
**Data de geração:** 2025-10-19 23:47:31
**Diretório analisado:** `C:\Users\henri\OneDrive\Desktop\OpinAppProject\opinapp`

**Módulos disponíveis:**
- YAML: ❌
- TOML: ✅

## 📈 Estatísticas Gerais

- **Total de arquivos:** 596
- **Tamanho total:** 51.83 MB

### 📁 Distribuição por Categoria
- **Static:** 227 arquivos
- **Outros:** 224 arquivos
- **Config:** 130 arquivos
- **Database:** 6 arquivos
- **Documentation:** 4 arquivos
- **Templates:** 4 arquivos
- **Python:** 1 arquivos

### 📄 Tipos de Arquivo (Top 10)
- `.js`: 221
- `.map`: 164
- `.json`: 129
- `.tsx`: 13
- `.css`: 6
- `.woff2`: 6
- `.svg`: 4
- `.ts`: 4
- `.html`: 4

## 🐍 Análise Python

- **Arquivos Python:** 1
- **Total de linhas:** 591
- **Classes:** 3
- **Funções/Métodos:** 13
- **TODOs/FIXMEs:** 4
- **Complexidade média:** 87.0

### 🎯 Arquivos Mais Complexos
- `tools\project_report.py`: 87 pontos de complexidade

## 📦 Dependências

### Python
- **requirements.txt:** 57

### Node
- **dependencies:** 4
- **devDependencies:** 3

## 🗄️ Análise de Banco de Dados

- **Engines detectados:** mongodb, mysql, sqlite, oracle, sqlserver, postgresql
- **Arquivos de configuração:** 31

## 🛡️ Análise de Segurança

### High Severity (7 issues)
- `tools\project_report.py:72` - Uso de eval() - Risco de injeção de código
- `tools\project_report.py:73` - Uso de exec() - Risco de injeção de código
- `tools\project_report.py:74` - Uso de os.system() - Risco de injeção de comandos
- `tools\project_report.py:75` - Uso de subprocess.call() - Risco de injeção
- `tools\project_report.py:76` - Senha hardcoded no código
  *... e mais 2 issues*

### Medium Severity (2 issues)
- `tools\project_report.py:81` - Uso de input() em produção
- `tools\project_report.py:83` - Debug mode ativado

### Low Severity (24 issues)
- `tools\project_report.py:53` - Uso de print() - Considere usar logging
- `tools\project_report.py:86` - Uso de print() - Considere usar logging
- `tools\project_report.py:96` - Uso de print() - Considere usar logging
- `tools\project_report.py:126` - Uso de print() - Considere usar logging
- `tools\project_report.py:133` - Uso de print() - Considere usar logging
  *... e mais 19 issues*

## 📂 Estrutura do Projeto
```
opinapp/
│   .vs/
│   │   opinapp/
│   │   │   CopilotIndices/
│   │   │       ... (profundidade limitada)
│   │   │   FileContentIndex/
│   │   │   └── f3bba235-346a-48e7-871a-e29a6a6f784c.vsidx
│   │       v17/
│   │       ├── .wsuo
│   │       ├── DocumentLayout.backup.json
│   │       └── DocumentLayout.json
│   ├── ProjectSettings.json
│   ├── slnx.sqlite
│   └── VSWorkspaceState.json
│   .vscode/
│   ├── launch.json
│   └── settings.json
│   backend/
│   │   prisma/
│   │   │   migrations/
│   │   │   │   ... (profundidade limitada)
│   │   │   │   ... (profundidade limitada)
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   │   src/
│   │   │   utils/
│   │   │   └── hashPassword.js
│   │   ├── dbTest.js
│   │   ├── server.js
│   │   └── tabela_user_db_opinapp.sql
│   ├── .env
│   ├── .gitignore
│   ├── 6.16.3
│   └── package.json
│   frontend/
│   │   .next/
│   │   │   cache/
│   │   │   ├── .previewinfo
│   │   │   ├── .rscinfo
│   │   │   ├── .tsbuildinfo
│   │   │   ├── chrome-devtools-workspace-uuid
│   │   │   └── next-devtools-config.json
│   │   │   diagnostics/
│   │   │   ├── build-diagnostics.json
│   │   │   └── framework.json
│   │   │   server/
│   │   │   │   ... (profundidade limitada)
│   │   │   │   ... (profundidade limitada)
│   │   │   │   ... (profundidade limitada)
│   │   │   ├── app-paths-manifest.json
│   │   │   ├── functions-config-manifest.json
│   │   │   ├── interception-route-rewrite-manifest.js
│   │   │   ├── middleware-build-manifest.js
│   │   │   ├── middleware-manifest.json
│   │   │   ├── next-font-manifest.js
│   │   │   ├── next-font-manifest.json
│   │   │   ├── pages-manifest.json
│   │   │   ├── server-reference-manifest.js
│   │   │   └── server-reference-manifest.json
│   │   │   static/
│   │   │   │   ... (profundidade limitada)
│   │   │   │   ... (profundidade limitada)
│   │   │   │   ... (profundidade limitada)
│   │   │       ... (profundidade limitada)
│   │   │   types/
│   │   │   ├── routes.d.ts
│   │   │   └── validator.ts
│   │   ├── app-build-manifest.json
│   │   ├── app-path-routes-manifest.json
│   │   ├── build-manifest.json
│   │   ├── BUILD_ID
│   │   ├── export-marker.json
│   │   ├── fallback-build-manifest.json
│   │   ├── images-manifest.json
│   │   ├── next-minimal-server.js.nft.json
│   │   ├── next-server.js.nft.json
│   │   ├── package.json
│   │   ├── postcss.js
│   │   ├── postcss.js.map
│   │   ├── prerender-manifest.json
│   │   ├── required-server-files.json
│   │   ├── routes-manifest.json
│   │   ├── trace
│   │   └── turbopack
│   │   public/
│   │   │   avatars/
│   │   │   ├── cliente1.jpg
│   │   │   ├── cliente2.webp
│   │   │   ├── cliente3.jpg
│   │   │   └── cliente3.webp
│   │   │   images/
│   │   │   ├── image-bg1.jpeg
│   │   │   ├── image-bg2.jpg
│   │   │   ├── qqquad.svg
│   │   │   ├── qqquad2.svg
│   │   │   └── ssscales.svg
│   │   ├── manifest.json
│   │   ├── opinapp_logo.png
│   │   └── opinapp_logo_rb.png
│   │   src/
│   │       app/
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       │   ... (profundidade limitada)
│   │       ├── favicon.ico
│   │       ├── globals.css
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── .gitignore
│   ├── backend_analysis_report.md
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tsconfig.json
│   tools/
│   └── project_report.py
├── .gitignore
├── opinapp-navigation-flow.svg
├── package-lock.json
├── package.json
├── README.md
└── requirements.txt
```