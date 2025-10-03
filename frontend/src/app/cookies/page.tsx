'use client';

import { useState } from 'react';

export default function CookiesPolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200/30 header sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="/opinapp_logo_rb.png" alt="OpinApp Logo" className="logo h-8 sm:h-10 lg:h-50 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Início</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Sobre</a>
              <a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Recursos</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Contato</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-1">
              <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 mr-4 text-lg font-medium" href="/login">Login</a>
              <a href="/enrollment">
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 text-lg">
                Inscrever-se
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100 py-4`}>
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2">Início</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2">Sobre</a>
              <a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2">Recursos</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2">Contato</a>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 text-center" href="/login">Login</a>
             <a href="/enrollment">
             <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 text-lg">
                  Inscrever-se
                </button>
             </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo da página */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        {/* Header da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Cookies</h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* O que são Cookies */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. O que são Cookies</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita nossa plataforma. Eles contêm informações sobre sua navegação e preferências, permitindo que reconheçamos seu dispositivo em visitas futuras e melhoremos sua experiência de uso.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Os cookies são amplamente utilizados para fazer com que sites e aplicações funcionem de forma mais eficiente, além de fornecer informações aos proprietários do site sobre como os usuários interagem com a plataforma.
          </p>
        </section>

        {/* Como utilizamos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Como a OpinApp Utiliza Cookies</h2>
          <p className="text-muted-foreground mb-4">A plataforma OpinApp utiliza cookies para:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Garantir o funcionamento básico da plataforma e suas funcionalidades essenciais</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Lembrar suas preferências e configurações de conta</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Manter sua sessão ativa durante o uso da plataforma</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Analisar o desempenho da plataforma e identificar melhorias</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Garantir a segurança da plataforma e prevenir fraudes</span>
            </li>
          </ul>
        </section>

        {/* Tipos de Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Tipos de Cookies Utilizados</h2>
          
          <div className="space-y-6">
            {/* Cookies Essenciais */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Cookies Essenciais (Obrigatórios)</h3>
              <p className="text-muted-foreground mb-4">
                Estes cookies são estritamente necessários para o funcionamento da plataforma e não podem ser desabilitados.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Finalidades:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                  <li>• Autenticação de usuário e manutenção de sessão</li>
                  <li>• Proteção contra ataques de segurança (CSRF)</li>
                  <li>• Funcionamento do formulário de feedbacks</li>
                  <li>• Navegação básica na plataforma</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <h4 className="font-semibold text-foreground text-sm mb-2">Exemplos:</h4>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li><code>opinapp_session</code>: Mantém você logado</li>
                  <li><code>csrf_token</code>: Protege contra ataques</li>
                  <li><code>user_preferences</code>: Configurações básicas</li>
                </ul>
              </div>
            </div>

            {/* Cookies Funcionais */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Cookies Funcionais (Opcionais)</h3>
              <p className="text-muted-foreground mb-4">
                Permitem que a plataforma forneça funcionalidades aprimoradas e personalização.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Finalidades:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                  <li>• Lembrar escolhas feitas (idioma, região)</li>
                  <li>• Personalizar a interface conforme preferências</li>
                  <li>• Melhorar a experiência de uso geral</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-foreground text-sm mb-2">Exemplos:</h4>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li><code>dashboard_layout</code>: Layout do dashboard</li>
                  <li><code>form_preferences</code>: Configurações de formulários</li>
                  <li><code>theme_choice</code>: Modo claro/escuro</li>
                </ul>
              </div>
            </div>

            {/* Cookies Analíticos */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Cookies Analíticos (Opcionais)</h3>
              <p className="text-muted-foreground mb-4">
                Nos ajudam a entender como os visitantes interagem com nossa plataforma de forma anônima.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Finalidades:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                  <li>• Contar visitantes e entender navegação</li>
                  <li>• Identificar páginas mais populares</li>
                  <li>• Detectar e resolver problemas técnicos</li>
                  <li>• Medir eficácia de recursos</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h4 className="font-semibold text-foreground text-sm mb-2">Exemplos:</h4>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li><code>analytics_session</code>: Análise de uso</li>
                  <li><code>page_views</code>: Contagem de páginas</li>
                  <li><code>user_journey</code>: Mapeamento de navegação</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Marketing */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.4 Cookies de Marketing (Opcionais)</h3>
              <p className="text-muted-foreground mb-4">
                Podem ser usados para personalizar comunicações e medir eficácia de campanhas.
              </p>
              <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                <p className="text-yellow-800 text-sm font-medium">
                  <strong>Nota:</strong> Atualmente, a OpinApp não utiliza cookies de marketing de terceiros. Esta categoria está preparada para futuras funcionalidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Duração dos Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Duração dos Cookies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Cookies de Sessão</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Temporários e expiram quando você fecha seu navegador. Utilizados para funcionalidades essenciais durante sua sessão ativa.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Cookies Persistentes</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Permanecem no seu dispositivo por período específico:
              </p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• <strong>Essenciais:</strong> Até 12 meses</li>
                <li>• <strong>Funcionais:</strong> Até 12 meses</li>
                <li>• <strong>Analíticos:</strong> Até 24 meses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Como Controlar */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Como Controlar e Gerenciar Cookies</h2>
          
          <div className="space-y-6">
            <div className="bg-primary text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">5.1 Centro de Preferências da OpinApp</h3>
              <p className="mb-4 opacity-90">Nossa plataforma oferece um centro de controle onde você pode:</p>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Visualizar todos os tipos de cookies utilizados</li>
                <li>• Ativar ou desativar categorias específicas</li>
                <li>• Revisar e alterar preferências a qualquer momento</li>
              </ul>
              <div className="mt-4 p-3 bg-white bg-opacity-20 rounded">
                <p className="text-sm"><strong>Para acessar:</strong> Configurações → Privacidade → Gerenciar Cookies</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">5.2 Configurações do Navegador</h3>
              <p className="text-muted-foreground mb-4">Você também pode controlar cookies através das configurações do seu navegador:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Google Chrome</h4>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    <li>1. Menu (três pontos) → Configurações</li>
                    <li>2. Privacidade e segurança</li>
                    <li>3. Cookies e outros dados do site</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Mozilla Firefox</h4>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    <li>1. Menu → Opções/Preferências</li>
                    <li>2. Privacidade e Segurança</li>
                    <li>3. Cookies e dados de sites</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Safari</h4>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    <li>1. Safari → Preferências</li>
                    <li>2. Privacidade</li>
                    <li>3. Gerenciar dados de websites</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Microsoft Edge</h4>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    <li>1. Menu → Configurações</li>
                    <li>2. Cookies e permissões do site</li>
                    <li>3. Cookies e dados armazenados</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto da Desabilitação */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Impacto da Desabilitação de Cookies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h3 className="text-lg font-semibold text-foreground mb-3">Cookies Essenciais</h3>
              <p className="text-muted-foreground text-sm mb-3">A desabilitação pode resultar em:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Impossibilidade de fazer login</li>
                <li>• Perda de funcionalidades básicas</li>
                <li>• Problemas de segurança</li>
                <li>• Necessidade de reconfigurar a cada visita</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-foreground mb-3">Outros Cookies</h3>
              <p className="text-muted-foreground text-sm mb-3">A desabilitação pode resultar em:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Experiência menos personalizada</li>
                <li>• Reconfiguração frequente de preferências</li>
                <li>• Menor eficiência na detecção de problemas</li>
                <li>• Comunicações menos relevantes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consentimento */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Consentimento e Base Legal</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Consentimento para Cookies Não Essenciais</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Em conformidade com a LGPD e regulamentações internacionais:
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Solicitamos seu consentimento antes de usar cookies não essenciais</li>
                <li>• Você pode retirar o consentimento a qualquer momento</li>
                <li>• Fornecemos informações claras sobre cada tipo</li>
                <li>• Respeitamos sua escolha sem limitar acesso</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Base Legal para Cookies Essenciais</h3>
              <p className="text-muted-foreground text-sm">
                Utilizados com base em nosso legítimo interesse em fornecer o serviço solicitado, 
                garantir segurança e cumprir obrigações contratuais.
              </p>
            </div>
          </div>
        </section>

        {/* Seus Direitos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Seus Direitos</h2>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">Direitos Relacionados a Cookies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Você tem o direito de:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Ser informado sobre uso de cookies</li>
                  <li>• Consentir ou recusar cookies não essenciais</li>
                  <li>• Acessar informações sobre cookies armazenados</li>
                  <li>• Excluir ou modificar cookies existentes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Como Exercer:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• E-mail: cookies@opinapp.com</li>
                  <li>• Central de Privacidade na sua conta</li>
                  <li>• Configurações da plataforma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="mb-8 bg-primary text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">9. Contato e Suporte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Dúvidas sobre Cookies</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>E-mail específico: cookies@opinapp.com</li>
                <li>Privacidade: privacidade@opinapp.com</li>
                <li>Suporte técnico: suporte@opinapp.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Encarregado de Dados (DPO)</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>E-mail: dpo@opinapp.com</li>
                <li>Prazo de resposta: Até 15 dias úteis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer da página */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-muted-foreground text-sm">
            Você sempre tem controle sobre como os cookies são utilizados em sua experiência com a OpinApp. 
            Suas escolhas de privacidade são respeitadas e podem ser modificadas a qualquer momento.
          </p>
        </div>
      </main>

      {/* Footer simples */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} OpinApp. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}