'use client';

import { useState } from 'react';

export default function PrivacyPolicyPage() {
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
              </button></a>
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Informações Gerais */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações Gerais</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A <strong>OpinApp</strong> ("nós", "nossa" ou "plataforma") está comprometida com a proteção da privacidade e dos dados pessoais de todos os usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-foreground mb-2">Dados da Empresa</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li><strong>E-mail para contato:</strong> privacidade@opinapp.com</li>
              <li><strong>DPO (Encarregado de Dados):</strong> dpo@opinapp.com</li>
            </ul>
          </div>
        </section>

        {/* Definições */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Definições Importantes</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed"><strong>Contratante:</strong> Empresa ou pessoa física que contrata os serviços da OpinApp</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed"><strong>Cliente Final:</strong> Pessoa que responde aos formulários de feedback do Contratante</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed"><strong>Dados Pessoais:</strong> Qualquer informação que possa identificar uma pessoa natural</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed"><strong>Tratamento:</strong> Qualquer operação realizada com dados pessoais (coleta, uso, armazenamento, etc.)</span>
            </li>
          </ul>
        </section>

        {/* Dados Coletados */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Quais Dados Coletamos</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Dados dos Contratantes</h3>
              <p className="text-muted-foreground mb-4">Coletamos as seguintes informações quando você se cadastra em nossa plataforma:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dados obrigatórios:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Nome completo ou razão social</li>
                    <li>• E-mail de contato</li>
                    <li>• Senha de acesso (criptografada)</li>
                    <li>• Dados da empresa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dados opcionais:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Telefone de contato</li>
                    <li>• Website da empresa</li>
                    <li>• Logo da empresa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Dados dos Clientes Finais</h3>
              <p className="text-muted-foreground mb-4">Dependendo da escolha do cliente final, coletamos:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No modo identificado:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Nome (fornecido voluntariamente)</li>
                    <li>• E-mail de contato</li>
                    <li>• Comentário/feedback</li>
                    <li>• Avaliação OpinStars (0-5 estrelas)</li>
                    <li>• Data e horário do envio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No modo anônimo:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Apenas comentário/feedback</li>
                    <li>• Avaliação OpinStars (0-5 estrelas)</li>
                    <li>• Data e horário do envio</li>
                    <li>• <em>(sem identificação pessoal)</em></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Usamos os Dados */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Como Usamos Seus Dados</h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Base Legal para o Tratamento</h3>
            <p className="text-muted-foreground mb-3">Utilizamos seus dados pessoais com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Execução de contrato:</strong> Para fornecer os serviços contratados</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Consentimento:</strong> Para funcionalidades opcionais e comunicação de marketing</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Legítimo interesse:</strong> Para segurança, prevenção de fraudes e melhorias na plataforma</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Finalidades Específicas</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Para Contratantes:</h4>
              <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                <li>• Fornecer acesso à plataforma e suas funcionalidades</li>
                <li>• Processar e exibir feedbacks coletados</li>
                <li>• Gerar relatórios e análises via IA</li>
                <li>• Comunicar atualizações e suporte técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Para Clientes Finais:</h4>
              <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                <li>• Processar e armazenar feedbacks fornecidos</li>
                <li>• Realizar análises automáticas via IA</li>
                <li>• Aplicar filtros de moderação automática</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IA */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Tratamento por Inteligência Artificial</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Como a IA Processa os Dados</h3>
            <p className="text-muted-foreground mb-4">Nossa inteligência artificial realiza as seguintes análises automatizadas:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Análise de sentimentos:</strong> Classifica comentários como positivos ou negativos</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Detecção de temas:</strong> Identifica assuntos recorrentes nos feedbacks</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Moderação automática:</strong> Filtra linguagem inadequada ou ofensiva</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Geração de resumos:</strong> Cria resumos executivos dos feedbacks</span>
              </li>
            </ul>

            <div className="mt-4 p-4 bg-white rounded-lg border border-purple-100">
              <h4 className="font-semibold text-foreground mb-2">5.2 Transparência sobre Decisões Automatizadas</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Você pode questionar qualquer resultado da análise de IA</li>
                <li>• Todas as análises podem ser revisadas manualmente</li>
                <li>• Os comentários originais sempre permanecem disponíveis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compartilhamento */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Compartilhamento de Dados</h2>
          
          <div className="bg-red-50 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Não Compartilhamos Dados Pessoais</h3>
            <p className="text-muted-foreground font-medium">
              A OpinApp <strong>NÃO compartilha, vende ou aluga</strong> dados pessoais para terceiros para fins comerciais.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Situações Excepcionais de Compartilhamento</h3>
          <p className="text-muted-foreground mb-3">Podemos compartilhar dados apenas nas seguintes situações:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Prestadores de serviço:</strong> Empresas que nos auxiliam tecnicamente (sempre com contratos de confidencialidade)</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Ordem judicial:</strong> Quando exigido por autoridades competentes</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Consentimento específico:</strong> Quando você autorizar expressamente</span>
            </li>
          </ul>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Armazenamento e Segurança</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">7.1 Onde Armazenamos</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Servidores seguros no Brasil</li>
                <li>• Provedores certificados em segurança</li>
                <li>• Criptografia em trânsito e em repouso</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">7.2 Medidas de Segurança</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Senhas criptografadas</li>
                <li>• Controle de acesso restrito</li>
                <li>• Monitoramento 24/7</li>
                <li>• Backups regulares</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Direitos dos Usuários */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Seus Direitos sobre os Dados</h2>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-muted-foreground mb-4">Conforme a LGPD, você tem os seguintes direitos:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Direito de Acesso</h4>
                <p className="text-muted-foreground text-sm mb-3">Confirmar e acessar seus dados pessoais</p>
                
                <h4 className="font-semibold text-foreground mb-2">Direito de Correção</h4>
                <p className="text-muted-foreground text-sm mb-3">Corrigir dados incompletos ou inexatos</p>
                
                <h4 className="font-semibold text-foreground mb-2">Direito de Exclusão</h4>
                <p className="text-muted-foreground text-sm">Solicitar a exclusão dos seus dados</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Direito de Portabilidade</h4>
                <p className="text-muted-foreground text-sm mb-3">Receber dados em formato legível</p>
                
                <h4 className="font-semibold text-foreground mb-2">Direito de Oposição</h4>
                <p className="text-muted-foreground text-sm mb-3">Opor-se ao tratamento para marketing</p>
                
                <h4 className="font-semibold text-foreground mb-2">Como Exercer</h4>
                <p className="text-muted-foreground text-sm">E-mail: privacidade@opinapp.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Uso de Cookies</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Utilizamos cookies para melhorar sua experiência na plataforma. Você pode gerenciar cookies através das configurações do seu navegador.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-foreground text-sm mb-1">Essenciais</h4>
              <p className="text-muted-foreground text-xs">Funcionamento básico</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-foreground text-sm mb-1">Funcionais</h4>
              <p className="text-muted-foreground text-xs">Suas preferências</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-foreground text-sm mb-1">Analíticos</h4>
              <p className="text-muted-foreground text-xs">Uso da plataforma</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-foreground text-sm mb-1">Marketing</h4>
              <p className="text-muted-foreground text-xs">Com consentimento</p>
            </div>
          </div>
        </section>

        {/* Alterações */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações nesta Política</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">Esta Política pode ser atualizada para refletir mudanças na legislação ou novos recursos</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">Alterações substanciais serão comunicadas por e-mail</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">Uso continuado após mudanças constitui aceitação</span>
            </li>
          </ul>
        </section>

        {/* Contato */}
        <section className="mb-8 bg-primary text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">11. Contato e Informações do DPO</h2>
          <p className="mb-4 opacity-90">Para questões relacionadas à privacidade e proteção de dados:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Encarregado de Dados (DPO)</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>E-mail: dpo@opinapp.com</li>
                <li>Prazo de resposta: Até 15 dias úteis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contato Geral</h3>
              <ul className="space-y-1 text-sm opacity-90">
                <li>E-mail: privacidade@opinapp.com</li>
                <li>Atendimento: Segunda a sexta, 9h às 18h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer da página */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-muted-foreground text-sm">
            Sua privacidade é fundamental para nós. Esta política foi elaborada para ser clara e transparente. Se tiver dúvidas, não hesite em nos contatar.
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