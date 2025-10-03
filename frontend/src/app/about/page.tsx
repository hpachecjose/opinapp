'use client';

import { useState } from 'react';

export default function AboutPage() {
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
              
              <a href="/#precos" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Preços</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Contato</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-1">
              <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 mr-4 text-lg font-medium cursor-pointer" href="/login">Login</a>
              <a href="/enrollment" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer">
                Inscrever-se
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
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
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Início</a>
              
              <a href="/#precos" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Preços</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Contato</a>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 text-center cursor-pointer" href="/login">Login</a>
                <a href="/enrollment" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer">
                Inscrever-se
              </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo da página Sobre */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Sobre o OpinApp</h1>
        </div>

        {/* Quem somos */}
        <section className="mb-12">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            O OpinApp é uma plataforma brasileira que simplifica a coleta e análise de feedbacks de clientes. Nossa ferramenta utiliza inteligência artificial para processar comentários e transformar opiniões em insights práticos para seu negócio.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Desenvolvemos uma solução que permite a empresas de todos os tamanhos coletar feedbacks através de múltiplos canais - WhatsApp, redes sociais, QR Code, links diretos ou incorporação em sites - e receber análises automáticas que identificam padrões, sentimentos e pontos de melhoria.
          </p>
        </section>

        {/* O problema que resolvemos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">O Problema que Resolvemos</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Muitas empresas brasileiras ainda coletam feedbacks de forma manual e desorganizada. Planilhas do Excel, mensagens espalhadas no WhatsApp, comentários perdidos nas redes sociais - tudo isso dificulta a análise e impede que os negócios tomem decisões baseadas em dados reais dos clientes.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Além disso, processar manualmente centenas de comentários é demorado e sujeito a interpretações pessoais. O OpinApp automatiza essa análise, garantindo consistência e economizando tempo valioso.
          </p>
        </section>

        {/* Nossa solução */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Nossa Solução</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Criamos uma plataforma que centraliza todos os feedbacks em um só lugar e usa IA para analisar automaticamente os comentários. A inteligência artificial identifica se o comentário é positivo ou negativo, filtra conteúdo inadequado e gera resumos executivos dos principais pontos mencionados pelos clientes.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Nossos clientes podem compartilhar formulários de feedback através dos canais que já usam para se comunicar com seus clientes, garantindo maior taxa de resposta e praticidade.
          </p>
        </section>

        {/* Por que OpinApp */}
        <section id="section-container" className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Por que escolhemos o nome OpinApp?</h2>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Opini + App = OpinApp</h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Opini</strong> vem de "opinião" - porque cada feedback do seu cliente é uma opinião valiosa que pode transformar seu negócio.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">App</strong> representa nossa plataforma moderna, acessível e fácil de usar em qualquer dispositivo.
            </p>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-lg font-semibold text-foreground">OpinStars</p>
              <p className="text-sm text-muted-foreground">Nosso sistema único de avaliação</p>
            </div>
          </div>
        </section>

        {/* Conformidade e Segurança */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Conformidade e Segurança</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            O OpinApp foi desenvolvido seguindo as diretrizes da Lei Geral de Proteção de Dados (LGPD). Oferecemos opções para que os clientes forneçam feedback de forma anônima ou identificada, sempre respeitando sua escolha e mantendo os dados protegidos.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Nossa inteligência artificial inclui filtros de moderação que identificam e isolam comentários com linguagem inadequada, protegendo nossos clientes de conteúdo ofensivo ou impróprio.
          </p>
        </section>

        {/* Para quem é o OpinApp */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Para Quem é o OpinApp</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Nossa plataforma atende empresas de todos os portes: desde empreendedores individuais que estão validando uma nova ideia até empresas estabelecidas que querem melhorar a experiência do cliente.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            É especialmente útil para negócios que vendem produtos ou serviços e precisam entender a percepção dos clientes para melhorar continuamente sua oferta.
          </p>
        </section>

        {/* Nosso compromisso */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Nosso Compromisso</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Acreditamos que feedback de qualidade deve ser acessível para todos os negócios brasileiros. Por isso, trabalhamos para manter nossa plataforma simples, eficiente e com preços justos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso objetivo é ajudar empresas brasileiras a crescerem através do conhecimento real sobre seus clientes, transformando opiniões em ações concretas de melhoria.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experimente o OpinApp e veja como é fácil coletar e analisar feedbacks dos seus clientes.
          </p>
          <a href="/enrollment">
          <button  className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300  cursor-pointer">
            Começar agora
          </button>
          </a>
         
        </section>
      </main>
    </div>
  );
}