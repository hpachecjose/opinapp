"use client";

import { useState, useEffect } from 'react';

// Dados simulados para demonstração
const mockData = {
  overview: {
    totalFeedbacks: 1247,
    averageOpinStars: 4.2,
    totalForms: 8,
    responseRate: 67.8,
    positivePercentage: 78.5,
    negativePercentage: 21.5
  },
  feedbacks: [
    {
      id: 1,
      customer: 'Ana Silva',
      email: 'ana.silva@email.com',
      comment: 'Excelente atendimento! A equipe foi muito prestativa e o produto chegou rapidamente.',
      opinStars: 5,
      sentiment: 'positive',
      date: '2024-01-15',
      formName: 'Pós-compra',
      isAnonymous: false
    },
    {
      id: 2,
      customer: 'Anônimo',
      email: null,
      comment: 'O produto é bom, mas a entrega demorou mais que o esperado.',
      opinStars: 3,
      sentiment: 'neutral',
      date: '2024-01-14',
      formName: 'Feedback Geral',
      isAnonymous: true
    },
    {
      id: 3,
      customer: 'Carlos Santos',
      email: 'carlos@empresa.com',
      comment: 'Tive problemas com o produto. O suporte foi lento para responder.',
      opinStars: 2,
      sentiment: 'negative',
      date: '2024-01-14',
      formName: 'Suporte Técnico',
      isAnonymous: false
    },
    {
      id: 4,
      customer: 'Maria Costa',
      email: 'maria.costa@gmail.com',
      comment: 'Adorei a experiência de compra! Voltarei a comprar com certeza.',
      opinStars: 5,
      sentiment: 'positive',
      date: '2024-01-13',
      formName: 'Pós-compra',
      isAnonymous: false
    },
    {
      id: 5,
      customer: 'Anônimo',
      email: null,
      comment: 'Site fácil de navegar, mas poderia ter mais opções de pagamento.',
      opinStars: 4,
      sentiment: 'positive',
      date: '2024-01-13',
      formName: 'Website',
      isAnonymous: true
    }
  ],
  chartData: [
    { month: 'Jul', average: 3.8, count: 156 },
    { month: 'Ago', average: 4.1, count: 203 },
    { month: 'Set', average: 4.0, count: 189 },
    { month: 'Out', average: 4.3, count: 234 },
    { month: 'Nov', average: 4.2, count: 267 },
    { month: 'Dez', average: 4.2, count: 198 }
  ],
  forms: [
    { id: 1, name: 'Pós-compra', responses: 456, status: 'active', created: '2023-12-01' },
    { id: 2, name: 'Feedback Geral', responses: 234, status: 'active', created: '2023-11-15' },
    { id: 3, name: 'Suporte Técnico', responses: 189, status: 'active', created: '2023-11-01' },
    { id: 4, name: 'Website', responses: 145, status: 'paused', created: '2023-10-20' }
  ],
  aiInsights: {
    summary: "Nos últimos 30 dias, 78% dos feedbacks foram positivos. Principais elogios: atendimento, qualidade do produto. Principais reclamações: tempo de entrega, suporte técnico.",
    themes: [
      { theme: 'Atendimento', count: 234, sentiment: 'positive' },
      { theme: 'Entrega', count: 167, sentiment: 'mixed' },
      { theme: 'Qualidade', count: 145, sentiment: 'positive' },
      { theme: 'Preço', count: 89, sentiment: 'mixed' },
      { theme: 'Suporte', count: 76, sentiment: 'negative' }
    ]
  }
};

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simular loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg transition-transform duration-200 ${i < rating ? 'text-amber-400 drop-shadow-sm scale-110' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const filteredFeedbacks = mockData.feedbacks.filter(feedback =>
    feedback.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feedback.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feedback.formName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading Skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary rounded-3xl mx-auto mb-6 animate-pulse flex items-center justify-center">
            <span className="text-2xl text-white">⭐</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Carregando Dashboard...
          </h2>
          <div className="mt-4 w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200/30 header sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <a href="/" className="flex items-center cursor-pointer">
              <img src="/opinapp_logo_rb.png" alt="OpinApp Logo" className="logo h-8 sm:h-10 lg:h-50 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Início</a>
              <a href="/dashboard" className="text-primary font-medium transition-colors duration-200 text-lg cursor-pointer">Dashboard</a>
              <a href="/surveys" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Pesquisas</a>
              <a href="/analytics" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Analytics</a>
              <a href="/settings" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium cursor-pointer">Configurações</a>
            </nav>

            {/* Desktop User Menu */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <span className="text-muted-foreground font-medium">Usuário</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100 py-4`}>
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Início</a>
              <a href="/dashboard" className="text-primary font-medium transition-colors duration-200 text-lg py-2 cursor-pointer">Dashboard</a>
              <a href="/surveys" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Pesquisas</a>
              <a href="/analytics" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Analytics</a>
              <a href="/settings" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 cursor-pointer">Configurações</a>
              
              {/* Mobile User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <span className="text-muted-foreground font-medium">Usuário</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="text-lg text-muted-foreground">
            Aqui está o resumo das suas pesquisas e análises.
          </p>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Feedbacks */}
          <div className="bg-card shadow-md rounded-xl p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Total de Feedbacks</h3>
            <p className="text-3xl font-bold text-primary">{mockData.overview.totalFeedbacks}</p>
            <p className="text-sm text-muted-foreground mt-2">+12% esta semana</p>
          </div>

          {/* Average Rating */}
          <div className="bg-card shadow-md rounded-xl p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Média de Avaliação</h3>
            <p className="text-3xl font-bold text-amber-600">{mockData.overview.averageOpinStars}/5</p>
            <p className="text-sm text-muted-foreground mt-2">+0.2 esta semana</p>
          </div>

          {/* Active Forms */}
          <div className="bg-card shadow-md rounded-xl p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Formulários Ativos</h3>
            <p className="text-3xl font-bold text-green-600">{mockData.overview.totalForms}</p>
            <p className="text-sm text-muted-foreground mt-2">+2 esta semana</p>
          </div>

          {/* Response Rate */}
          <div className="bg-card shadow-md rounded-xl p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Taxa de Resposta</h3>
            <p className="text-3xl font-bold text-purple-600">{mockData.overview.responseRate}%</p>
            <p className="text-sm text-muted-foreground mt-2">+5.3% esta semana</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-card shadow-md rounded-xl p-2 mb-8">
          <div className="flex space-x-2">
            {[
              { id: 'overview', label: 'Visão Geral', icon: '📊' },
              { id: 'feedbacks', label: 'Feedbacks', icon: '💬', badge: mockData.feedbacks.length },
              { id: 'analytics', label: 'Análises', icon: '📈' },
              { id: 'forms', label: 'Formulários', icon: '📝', badge: mockData.forms.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
                {tab.badge && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.id ? 'bg-white text-primary' : 'bg-primary text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Gráfico e Insights Side by Side */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Gráfico */}
                <div className="xl:col-span-2 bg-card shadow-md rounded-xl p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-foreground flex items-center">
                      <span className="text-2xl mr-3">📈</span> Evolução da Avaliação
                    </h3>
                    <span className="text-sm text-muted-foreground bg-gray-100 px-3 py-1.5 rounded-full font-medium">Últimos 6 meses</span>
                  </div>
                  <div className="h-64 flex items-end justify-between space-x-4">
                    {mockData.chartData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 group">
                        <div
                          className="w-full bg-primary rounded-t-2xl shadow-lg transition-all duration-300 group-hover:bg-primary-dark relative"
                          style={{
                            height: `${(item.average / 5) * 200}px`,
                            minHeight: '20px'
                          }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {item.average} ⭐
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-sm font-bold text-foreground">{item.average}</p>
                          <p className="text-xs font-semibold text-muted-foreground mt-1">{item.month}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.count} respostas</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights da IA */}
                <div className="bg-card shadow-md rounded-xl p-6 border-2 border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <span className="text-2xl mr-3">🤖</span> Insights da IA
                  </h3>
                  <div className="bg-primary/10 rounded-xl p-5 mb-6">
                    <p className="text-foreground leading-relaxed text-sm font-medium">{mockData.aiInsights.summary}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200 transform hover:scale-105 transition-transform duration-200">
                      <div className="text-2xl font-bold text-green-600">
                        {mockData.overview.positivePercentage}%
                      </div>
                      <div className="text-sm font-semibold text-foreground mt-1">😊 Positivos</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200 transform hover:scale-105 transition-transform duration-200">
                      <div className="text-2xl font-bold text-red-600">
                        {mockData.overview.negativePercentage}%
                      </div>
                      <div className="text-sm font-semibold text-foreground mt-1">😞 Negativos</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <section className="mt-8">
                <div className="bg-card shadow-md rounded-xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Atividade Recente</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Nova resposta recebida</p>
                        <p className="text-sm text-muted-foreground">Pesquisa: Satisfação do Cliente • 2 min atrás</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Nova pesquisa criada</p>
                        <p className="text-sm text-muted-foreground">Pesquisa de Produto • 1 hora atrás</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Feedbacks Tab */}
          {activeTab === 'feedbacks' && (
            <div className="space-y-6">
              {/* Filtros */}
              <div className="bg-card shadow-md rounded-xl p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200">
                      <option>Todos os formulários</option>
                      {mockData.forms.map(form => (
                        <option key={form.id}>{form.name}</option>
                      ))}
                    </select>
                    <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200">
                      <option>Todos os sentimentos</option>
                      <option>Positivos</option>
                      <option>Neutros</option>
                      <option>Negativos</option>
                    </select>
                    <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200">
                      <option>Avaliação: Todos</option>
                      {[5,4,3,2,1].map(stars => (
                        <option key={stars}>{stars} estrela{stars > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold flex items-center justify-center space-x-2">
                    <span>🔍</span>
                    <span>Aplicar Filtros</span>
                  </button>
                </div>
              </div>

              {/* Tabela de Feedbacks */}
              <div className="bg-card shadow-md rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Cliente</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Comentário</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Avaliação</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Data</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredFeedbacks.map((feedback) => (
                        <tr key={feedback.id} className="hover:bg-gray-50 transition-all duration-200">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <p className="text-sm font-bold text-foreground">
                                {feedback.isAnonymous ? '👤 Anônimo' : feedback.customer}
                              </p>
                              <p className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full inline-block mt-2 font-medium">
                                {feedback.formName}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-muted-foreground line-clamp-2 max-w-xs">
                              {feedback.comment}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col space-y-3">
                              <div className="flex">
                                {renderStars(feedback.opinStars)}
                              </div>
                              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${getSentimentColor(feedback.sentiment)}`}>
                                {feedback.sentiment === 'positive' ? '😊 Positivo' : 
                                 feedback.sentiment === 'negative' ? '😞 Negativo' : '😐 Neutro'}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-foreground">
                              {new Date(feedback.date).toLocaleDateString('pt-BR')}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button 
                              onClick={() => setSelectedFeedback(feedback)}
                              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-sm"
                            >
                              👁️ Detalhes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Análise de Temas */}
                <div className="bg-card shadow-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <span className="text-2xl mr-3">🏷️</span> Temas Mais Mencionados
                  </h3>
                  <div className="space-y-4">
                    {mockData.aiInsights.themes.map((theme, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all duration-200">
                        <div className="flex items-center">
                          <span className={`w-4 h-4 rounded-full mr-3 ${getSentimentColor(theme.sentiment)}`}></span>
                          <span className="text-sm font-bold text-foreground">
                            {theme.theme}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-muted-foreground px-3 py-1 bg-white rounded-full">
                          {theme.count} menções
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distribuição de Sentimentos */}
                <div className="bg-card shadow-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <span className="text-2xl mr-3">😊</span> Análise de Sentimentos
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                          <span className="text-sm font-bold text-foreground">Positivos</span>
                        </div>
                        <span className="text-sm font-bold text-foreground">{mockData.overview.positivePercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-green-500 transition-all duration-1000 ease-out" 
                          style={{width: `${mockData.overview.positivePercentage}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                          <span className="text-sm font-bold text-foreground">Negativos</span>
                        </div>
                        <span className="text-sm font-bold text-foreground">{mockData.overview.negativePercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-red-500 transition-all duration-1000 ease-out" 
                          style={{width: `${mockData.overview.negativePercentage}%`}}
                        ></div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary/10 rounded-xl mt-6">
                      <p className="text-sm font-bold text-foreground">📊 Satisfação Geral</p>
                      <p className="text-2xl font-bold text-primary mt-2">
                        {mockData.overview.averageOpinStars}/5 ⭐
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Forms Tab */}
          {activeTab === 'forms' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">
                  📝 Meus Formulários
                </h2>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-bold">
                  <span>+</span>
                  <span>Criar Novo Formulário</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockData.forms.map((form, index) => (
                  <div key={form.id} className="group">
                    <div className="bg-card shadow-md rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-500">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{form.name}</h3>
                          <p className="text-sm text-muted-foreground font-medium">Criado em {new Date(form.created).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(form.status)}`}>
                          {form.status === 'active' ? '✅ Ativo' : '⏸️ Pausado'}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-4xl font-bold text-primary">
                          {form.responses}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">respostas recebidas</p>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-white border border-gray-200 text-foreground px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                          📊 Resultados
                        </button>
                        <button className="flex-1 bg-white border border-gray-200 text-foreground px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                          🔗 Link
                        </button>
                        <button className="flex-1 bg-white border border-gray-200 text-foreground px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                          ⚙️ Editar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal para detalhes do feedback */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-foreground">
                📋 Detalhes do Feedback
              </h3>
              <button 
                onClick={() => setSelectedFeedback(null)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-muted-foreground mb-2">👤 Cliente</p>
                  <p className="text-foreground font-bold text-lg">{selectedFeedback.isAnonymous ? 'Anônimo' : selectedFeedback.customer}</p>
                </div>
                
                {!selectedFeedback.isAnonymous && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-bold text-muted-foreground mb-2">📧 E-mail</p>
                    <p className="text-foreground font-bold text-lg">{selectedFeedback.email}</p>
                  </div>
                )}
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-muted-foreground mb-2">⭐ Avaliação</p>
                  <div className="flex">
                    {renderStars(selectedFeedback.opinStars)}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-bold text-muted-foreground mb-2">📅 Data</p>
                  <p className="text-foreground font-bold text-lg">{new Date(selectedFeedback.date).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm font-bold text-muted-foreground mb-3">💬 Comentário</p>
                <p className="text-foreground leading-relaxed text-lg font-medium italic">
                  "{selectedFeedback.comment}"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                {!selectedFeedback.isAnonymous && (
                  <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl font-bold flex items-center space-x-2">
                    <span>📧</span>
                    <span>Responder por E-mail</span>
                  </button>
                )}
                <button 
                  onClick={() => setSelectedFeedback(null)}
                  className="bg-white border border-gray-200 text-foreground px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-bold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}