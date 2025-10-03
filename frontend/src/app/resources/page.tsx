'use client';

import { useState } from 'react';

export default function ResourcesPage() {
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
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Contato</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-1">
              <a className="link-login text-muted-foreground hover:text-foreground transition-colors duration-200 mr-4 text-lg font-medium cursor-pointer" href="/login">Login</a>
             <a href="/enrollment">
             <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer">
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

      {/* Conteúdo da página Recursos */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header da página */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Recursos do OpinApp</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Conheça todas as funcionalidades que tornam a coleta e análise de feedbacks mais simples e eficiente para o seu negócio.
          </p>
        </div>

        {/* Sistema OpinStars */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sistema OpinStars</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa forma única de coletar avaliações que combina praticidade com dados estruturados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Avaliação de 0-5 OpinStars</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema intuitivo de estrelas que permite aos clientes darem uma nota rápida e objetiva sobre sua experiência.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Comentários Detalhados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Campo aberto para que os clientes expliquem sua experiência, fornecendo insights qualitativos valiosos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Modo Anônimo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Opção para clientes deixarem feedback sem se identificar, garantindo maior liberdade e honestidade nas respostas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Modo Identificado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para clientes que desejam se identificar, permitindo follow-up personalizado e resolução de questões específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Canais de Distribuição */}
        <section className="mb-20 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Canais de Distribuição</h2>
            <p className="text-lg text-muted-foreground">
              Colete feedbacks onde seus clientes estão. Múltiplas formas de compartilhar seus formulários de pesquisa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">WhatsApp</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Templates prontos para enviar links de pesquisa via WhatsApp Business ou pessoal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4m0 0V4m0 4h0m0 0v4m0 0h4m0 0v4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">QR Code</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Geração automática de QR Codes para impressão em estabelecimentos físicos ou materiais promocionais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Redes Sociais</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Compartilhamento otimizado para Instagram, Facebook, LinkedIn e outras plataformas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Embed no Site</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Código para incorporar formulários diretamente no seu site como botão suspenso ou seção fixa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">SMS</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Envio de links de pesquisa via SMS para campanhas diretas de feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Email</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Templates profissionais para campanhas de email solicitando feedback dos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Análise Inteligente */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Análise Inteligente por IA</h2>
            <p className="text-lg text-muted-foreground">
              Nossa inteligência artificial processa automaticamente todos os comentários, extraindo insights valiosos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Filtro de Moderação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema automático que identifica e filtra linguagem inadequada, ofensas e conteúdo impróprio, protegendo sua marca.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Análise de Sentimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Classificação automática entre comentários positivos e negativos, ajudando você a identificar rapidamente os pontos fortes e fracos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Resumos Executivos</h3>
              <p className="text-muted-foreground leading-relaxed">
                IA gera resumos automáticos destacando os principais pontos mencionados pelos clientes, economizando seu tempo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Detecção de Temas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identifica automaticamente assuntos e temas recorrentes nos comentários, revelando padrões importantes.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard e Relatórios */}
        <section className="mb-20 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Dashboard e Relatórios</h2>
            <p className="text-lg text-muted-foreground">
              Visualize seus dados de forma clara e profissional, com relatórios exportáveis para apresentações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Métricas em Tempo Real</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acompanhe OpinStars médias, volume de feedbacks e tendências em tempo real.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Gráficos Personalizáveis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Três tipos de gráficos (linha, barra, pizza) para visualizar seus dados da melhor forma.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Relatórios Exportáveis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exporte relatórios completos em PDF ou Excel para apresentações e análises offline.
              </p>
            </div>
          </div>
        </section>

        {/* Segurança e Conformidade */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Segurança e Conformidade</h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvido seguindo as melhores práticas de segurança e em total conformidade com a legislação brasileira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Conformidade LGPD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Total conformidade com a Lei Geral de Proteção de Dados, garantindo que os dados dos seus clientes estejam sempre protegidos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dados no Brasil</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos os dados são armazenados em servidores brasileiros, garantindo soberania digital e conformidade legal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Backup Automático</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema de backup automatizado garante que seus dados nunca sejam perdidos, com redundância e alta disponibilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 12H9v4H5v-4H3a2 2 0 01-2-2 6 6 0 016-6zm0 0V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Controle de Acesso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema seguro de autenticação com diferentes níveis de acesso para proteger suas informações empresariais.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-primary rounded-lg p-12 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Pronto para experimentar todos esses recursos?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Comece gratuitamente e descubra como o OpinApp pode transformar a forma como você coleta e analisa feedbacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg">
              Começar Gratuitamente
            </button>
            <button className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white transition-colors duration-200 text-base sm:text-lg" style={{ '--hover-text-color': '#2f9cf4' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#2f9cf4'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              Ver demonstração
            </button>
          </div>
        </section>
      </main>

      {/* Footer simples */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} OpinApp. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}