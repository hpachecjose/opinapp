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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'negative': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <img src="/opinapp_logo_rb.png" alt="OpinApp" className="h-8" />
              
              <nav className="hidden md:flex gap-6">
                <a href="/" className="text-sm text-gray-600 hover:text-gray-900">Início</a>
                <a href="/dashboard" className="text-sm text-indigo-600 font-medium">Dashboard</a>
                <a href="/surveys" className="text-sm text-gray-600 hover:text-gray-900">Pesquisas</a>
                <a href="/analytics" className="text-sm text-gray-600 hover:text-gray-900">Analytics</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">U</span>
                </div>
                <span className="text-sm text-gray-700">Usuário</span>
              </div>

              <button
                className="md:hidden text-gray-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col gap-3">
                <a href="/" className="text-sm text-gray-600 py-2">Início</a>
                <a href="/dashboard" className="text-sm text-indigo-600 font-medium py-2">Dashboard</a>
                <a href="/surveys" className="text-sm text-gray-600 py-2">Pesquisas</a>
                <a href="/analytics" className="text-sm text-gray-600 py-2">Analytics</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-sm text-gray-600">Visão geral das suas métricas</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-600 mb-1">Total de Feedbacks</p>
            <p className="text-2xl font-semibold text-gray-900">{mockData.overview.totalFeedbacks}</p>
            <p className="text-xs text-emerald-600 mt-2">+12% esta semana</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-600 mb-1">Média de Avaliação</p>
            <p className="text-2xl font-semibold text-gray-900">{mockData.overview.averageOpinStars}/5</p>
            <p className="text-xs text-emerald-600 mt-2">+0.2 esta semana</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-600 mb-1">Formulários Ativos</p>
            <p className="text-2xl font-semibold text-gray-900">{mockData.overview.totalForms}</p>
            <p className="text-xs text-emerald-600 mt-2">+2 novos</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-600 mb-1">Taxa de Resposta</p>
            <p className="text-2xl font-semibold text-gray-900">{mockData.overview.responseRate}%</p>
            <p className="text-xs text-emerald-600 mt-2">+5.3% esta semana</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {[
              { id: 'overview', label: 'Visão Geral' },
              { id: 'feedbacks', label: 'Feedbacks' },
              { id: 'analytics', label: 'Análises' },
              { id: 'forms', label: 'Formulários' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-6">Evolução da Avaliação</h3>
                <div className="h-64 flex items-end justify-between gap-4">
                  {mockData.chartData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center group">
                      <div
                        className="w-full bg-indigo-600 rounded-t transition-all hover:bg-indigo-700"
                        style={{ height: `${(item.average / 5) * 200}px`, minHeight: '20px' }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 -mt-8 text-center">
                          <span className="text-xs font-medium text-gray-900">{item.average}</span>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="text-xs font-medium text-gray-900">{item.month}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Insights</h3>
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{mockData.aiInsights.summary}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-xl font-semibold text-emerald-700">
                      {mockData.overview.positivePercentage}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Positivos</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <div className="text-xl font-semibold text-rose-700">
                      {mockData.overview.negativePercentage}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Negativos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'feedbacks' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Todos os formulários</option>
                  {mockData.forms.map(form => (
                    <option key={form.id}>{form.name}</option>
                  ))}
                </select>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Todos os sentimentos</option>
                  <option>Positivos</option>
                  <option>Neutros</option>
                  <option>Negativos</option>
                </select>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Todas as avaliações</option>
                  {[5,4,3,2,1].map(stars => (
                    <option key={stars}>{stars} estrela{stars > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Feedbacks List */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Comentário</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Avaliação</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Data</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockData.feedbacks.map((feedback) => (
                      <tr key={feedback.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {feedback.isAnonymous ? 'Anônimo' : feedback.customer}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{feedback.formName}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
                            {feedback.comment}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-2">
                            <div className="flex text-sm">
                              {renderStars(feedback.opinStars)}
                            </div>
                            <span className={`inline-flex px-2 py-1 rounded text-xs font-medium border ${getSentimentColor(feedback.sentiment)}`}>
                              {feedback.sentiment === 'positive' ? 'Positivo' : 
                               feedback.sentiment === 'negative' ? 'Negativo' : 'Neutro'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {new Date(feedback.date).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button 
                            onClick={() => setSelectedFeedback(feedback)}
                            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            Ver detalhes
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

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Themes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Temas Mais Mencionados</h3>
              <div className="space-y-3">
                {mockData.aiInsights.themes.map((theme, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">{theme.theme}</span>
                    <span className="text-sm text-gray-600">{theme.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Análise de Sentimentos</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Positivos</span>
                    <span className="text-sm font-medium text-gray-900">{mockData.overview.positivePercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-emerald-500" 
                      style={{width: `${mockData.overview.positivePercentage}%`}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Negativos</span>
                    <span className="text-sm font-medium text-gray-900">{mockData.overview.negativePercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-rose-500" 
                      style={{width: `${mockData.overview.negativePercentage}%`}}
                    ></div>
                  </div>
                </div>

                <div className="text-center p-4 bg-indigo-50 rounded-lg mt-4">
                  <p className="text-sm text-gray-600">Satisfação Geral</p>
                  <p className="text-2xl font-semibold text-indigo-600 mt-1">
                    {mockData.overview.averageOpinStars}/5
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forms' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Formulários</h2>
              <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
                Novo Formulário
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockData.forms.map((form) => (
                <div key={form.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{form.name}</h3>
                      <p className="text-xs text-gray-500">
                        {new Date(form.created).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      form.status === 'active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {form.status === 'active' ? 'Ativo' : 'Pausado'}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-2xl font-semibold text-gray-900">{form.responses}</p>
                    <p className="text-sm text-gray-600">respostas</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 text-sm text-gray-700 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
                      Resultados
                    </button>
                    <button className="flex-1 text-sm text-gray-700 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50">
                      Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Detalhes do Feedback</h3>
              <button 
                onClick={() => setSelectedFeedback(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Cliente</p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedFeedback.isAnonymous ? 'Anônimo' : selectedFeedback.customer}
                  </p>
                </div>
                
                {!selectedFeedback.isAnonymous && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">E-mail</p>
                    <p className="text-sm font-medium text-gray-900">{selectedFeedback.email}</p>
                  </div>
                )}
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Avaliação</p>
                  <div className="flex text-sm">{renderStars(selectedFeedback.opinStars)}</div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Data</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(selectedFeedback.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-2">Comentário</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedFeedback.comment}
                </p>
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                {!selectedFeedback.isAnonymous && (
                  <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Responder
                  </button>
                )}
                <button 
                  onClick={() => setSelectedFeedback(null)}
                  className="text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}