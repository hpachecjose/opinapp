'use client';

import { useState } from 'react';

export default function TermsPage() {
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
              <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 mr-4 text-lg font-medium cursor-pointer" href="/login">Login</a>
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Descrição do Produto */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Descrição do Produto</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O OpinApp é uma plataforma que oferece o serviço de coleta de comentários para o seu negócio e estes comentários são analisados e resumidos por Inteligência Artificial. Funciona da seguinte maneira:
          </p>
          
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">
                O contratante acessa a plataforma OpinApp, faz seu cadastro e a partir de então recebe um link exclusivo que contém um formulário para o seu cliente de seus produtos/serviço darem feedbacks sobre estes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">
                Após a coleta, o sistema faz um tratamento desses comentários com uma análise feita por um agente de Inteligência Artificial que devolve um relatório resumido por meio de um dashboard disponibilizado para o contratante na plataforma OpinApp.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">
                Além dos comentários, os clientes dos contratantes podem dar uma pontuação sobre sua satisfação do produto/serviço do contratante, por meio de um sistema de classificação - a <strong>OpinStars</strong> – que é um método de pontuação por estrelas. Após o comentário, o cliente pode dar de 0 a 5 estrelas, classificando ainda mais o seu nível de satisfação positiva ou negativa em relação ao serviço prestado.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed">
                O contratante pode disponibilizar seu link por diversos meios. Os que possuem site podem disponibilizar o link por meio de integração direta no site, como botão suspenso (Pop-up) ou div fixa no site (seção integrada ao layout).
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div className="leading-relaxed">
                <span>Os clientes dos contratantes poderão enviar seus comentários de duas formas:</span>
                <ul className="mt-2 ml-4 space-y-2">
                  <li><strong>1. Comentário anônimo:</strong> o cliente insere somente seu comentário e a pontuação OpinStars, sem necessidade de identificação.</li>
                  <li><strong>2. Comentário identificado:</strong> o cliente pode optar por informar seu nome, email de contato, além do comentário e da pontuação OpinStars, permitindo ao contratante contato para eventuais retornos.</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        {/* Termos */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              O uso da plataforma OpinApp está condicionado à aceitação expressa destes Termos de Uso, que estabelecem as condições gerais de utilização do serviço, os direitos e obrigações do contratante e dos clientes. Caso não concorde com algum termo, recomenda-se não utilizar a plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Cadastro e Responsabilidades dos Usuários</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O contratante é responsável por fornecer informações verdadeiras e atualizadas no momento do cadastro, manter a confidencialidade de suas credenciais e supervisionar as atividades realizadas por seus usuários autorizados.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O contratante deve garantir que o envio dos formulários para seus clientes esteja em conformidade com a legislação aplicável, especialmente no que se refere à coleta e tratamento de dados pessoais conforme a LGPD (Lei Geral de Proteção de Dados).
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso da Plataforma e Limitações</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O OpinApp oferece uma versão MVP do serviço, que pode apresentar limitações técnicas ou mudanças durante o período de disponibilização.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O contratante reconhece que a análise realizada pela Inteligência Artificial é um suporte para tomada de decisão e não substitui avaliações técnicas ou profissionais mais aprofundadas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  É proibido o uso do serviço para coleta de dados ou informações ilegais, ofensivas, difamatórias, ou que violem direitos de terceiros.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Privacidade e Proteção de Dados</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  Os dados coletados por meio da plataforma serão usados exclusivamente para análise e apresentação dos feedbacks dentro do dashboard do contratante.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O OpinApp assegura medidas de segurança para proteção das informações armazenadas, conforme previsto na LGPD, não compartilhando dados pessoais com terceiros sem consentimento explícito.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Propriedade Intelectual</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  Todos os direitos relacionados à plataforma, conteúdos, software, marcas, e funcionalidades pertencem ao OpinApp e seus licenciadores.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O uso concedido ao contratante é limitado e não transfere quaisquer direitos autorais ou de propriedade intelectual.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cancelamento do Serviço</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O contratante poderá cancelar a qualquer momento a utilização dos serviços da plataforma OpinApp, sem necessidade de aviso prévio ou justificativa.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O cancelamento pode ser efetuado pelo próprio contratante por meio da plataforma ou contato com o suporte.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Política de Não Reembolso</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  Após o pagamento pelos serviços contratados, não haverá estorno, reembolso ou compensação financeira de qualquer natureza, mesmo que o contratante se sinta insatisfeito com o serviço prestado.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">
                  O contratante reconhece que pode simplesmente cancelar o serviço a qualquer momento, mas não terá direito à devolução de valores pagos.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificações nos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              O OpinApp reserva o direito de modificar estes Termos de Uso a qualquer momento, informando os usuários por meio da plataforma ou por email. O uso contínuo após alterações constitui aceitação das novas condições.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O OpinApp não será responsável por quaisquer danos indiretos, lucros cessantes ou consequenciais decorrentes do uso da plataforma ou dos relatórios gerados, nem por falhas técnicas temporárias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Suporte e Atendimento</h2>
            <p className="text-muted-foreground leading-relaxed">
              O OpinApp disponibiliza canais de suporte para esclarecimento de dúvidas e resolução de problemas. O contratante concorda em utilizar esses canais respeitando boas práticas de comunicação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Disposições Gerais</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso constituem o acordo integral entre o contratante e o OpinApp no que diz respeito ao uso da plataforma. O OpinApp não garante resultados específicos decorrentes do uso dos serviços e não assume qualquer responsabilidade por decisões tomadas com base nas análises fornecidas.
            </p>
          </section>
        </div>

        {/* Footer da página */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-muted-foreground text-sm">
            Para dúvidas sobre estes termos, entre em contato conosco através dos nossos canais de suporte.
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