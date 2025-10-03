"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        company: "",
        plan: "free"
    });

    const navigationItems = [
        { href: "/", label: "Voltar à página inicial" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de cadastro
        console.log("Dados do formulário:", formData);
    };

    const plans = [
        {
            id: "free",
            name: "Plano Grátis",
            price: "R$ 0",
            period: "/mês",
            features: [
                "Até 50 comentários por mês",
                "Dashboard básico",
                "1 formulário ativo",
                "Suporte por email"
            ],
            popular: false
        },
        {
            id: "pro",
            name: "Plano Pro",
            price: "R$ 49",
            period: "/mês",
            features: [
                "Comentários ilimitados",
                "Relatórios completos",
                "Suporte prioritário",
                "Formulários ilimitados",
                "Análises avançadas",
                "Exportação de dados"
            ],
            popular: true
        }
    ];

    const getButtonText = () => {
        if (formData.plan === "free") {
            return "Começar Grátis";
        } else {
            return "Assinar por R$ 49/mês";
        }
    };

    return (
        <div className="font-sans min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 overflow-x-hidden flex flex-col">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-xl border-b border-white/40 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                            aria-label="OpinApp - Página inicial"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-3">
                                <span className="text-white font-bold text-lg">O</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    OpinApp
                                </h1>
                                <p className="text-xs text-gray-500">Customer Feedback</p>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8" aria-label="Navegação principal">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-lg font-medium py-2 px-4 rounded-xl hover:bg-white/60 hover:shadow-lg cursor-pointer"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="/login"
                                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-lg font-medium py-2 px-4 rounded-xl hover:bg-white/60 hover:shadow-lg cursor-pointer"
                            >
                                Login
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-3 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-200 shadow-lg cursor-pointer"
                            onClick={toggleMobileMenu}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Alternar menu mobile"
                            aria-controls="mobile-menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        id="mobile-menu"
                        className={`lg:hidden border-t border-white/40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
                            }`}
                    >
                        <nav className="flex flex-col space-y-2" aria-label="Navegação mobile">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/60 cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col gap-3 pt-4 border-t border-white/40">
                                <a
                                    href="/login"
                                    className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-lg font-medium py-3 text-center rounded-xl hover:bg-white/60"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-6xl w-full space-y-8">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Comece a coletar feedbacks inteligentes
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Junte-se a milhares de empresas que usam o OpinApp para entender melhor seus clientes e tomar decisões baseadas em dados.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Form Section */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Criar sua conta
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    Já tem uma conta?{" "}
                                    <a
                                        href="/login"
                                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        Faça login aqui
                                    </a>
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-bold text-gray-700 mb-2"
                                        >
                                            Nome completo *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Seu nome completo"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm hover:shadow-lg"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-bold text-gray-700 mb-2"
                                        >
                                            Empresa
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Nome da sua empresa"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm hover:shadow-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-bold text-gray-700 mb-2"
                                    >
                                        E-mail profissional *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="seuemail@empresa.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm hover:shadow-lg"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-bold text-gray-700 mb-2"
                                        >
                                            Senha *
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            placeholder="********"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm hover:shadow-lg"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="confirmPassword"
                                            className="block text-sm font-bold text-gray-700 mb-2"
                                        >
                                            Confirmar senha *
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            placeholder="********"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm hover:shadow-lg"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        Eu concordo com os{" "}
                                        <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                                            Termos de Serviço
                                        </a>{" "}
                                        e{" "}
                                        <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                                            Política de Privacidade
                                        </a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    {getButtonText()}
                                </button>
                            </form>
                        </div>

                        {/* Plans Section */}
                        <div className="space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Escolha seu plano
                                </h3>
                                <p className="text-gray-600">
                                    Comece gratuitamente e faça upgrade quando precisar
                                </p>
                            </div>

                            <div className="space-y-4">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`bg-white/80 backdrop-blur-lg rounded-3xl border-2 p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                                            formData.plan === plan.id
                                                ? "border-blue-500 shadow-xl"
                                                : plan.popular
                                                ? "border-purple-500 shadow-lg"
                                                : "border-white/60 shadow-lg"
                                        }`}
                                        onClick={() => setFormData(prev => ({ ...prev, plan: plan.id }))}
                                    >
                                        {plan.popular && (
                                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                                                ⭐ Mais Popular
                                            </div>
                                        )}
                                        
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-800">{plan.name}</h4>
                                                <div className="flex items-baseline mt-2">
                                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                                    <span className="text-gray-600 ml-1">{plan.period}</span>
                                                </div>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                                formData.plan === plan.id 
                                                    ? "border-blue-500 bg-blue-500" 
                                                    : "border-gray-300"
                                            }`}>
                                                {formData.plan === plan.id && (
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                )}
                                            </div>
                                        </div>

                                        <ul className="space-y-3">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-gray-700">
                                                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Aviso especial para o plano gratuito */}
                                        {plan.id === "free" && (
                                            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                                                <p className="text-xs text-yellow-800 text-center">
                                                    <strong>Atenção:</strong> Após 50 comentários, upgrade obrigatório para continuar usando
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Benefits Section */}
                            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-6 border border-blue-200/40">
                                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="text-2xl mr-2">🚀</span> O que você ganha:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-600 text-lg">✓</span>
                                        <span>Dashboard em tempo real</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-600 text-lg">✓</span>
                                        <span>Análises de sentimentos com IA</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-600 text-lg">✓</span>
                                        <span>Formulários personalizáveis</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-600 text-lg">✓</span>
                                        <span>Relatórios automáticos</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="text-center">
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 text-lg">🔒</span>
                                        <span>Segurança SSL</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 text-lg">💳</span>
                                        <span>Pagamento seguro</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 text-lg">↩️</span>
                                        <span>Cancelamento fácil</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">O</span>
                                </div>
                                <span className="text-xl font-bold">OpinApp</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Transformando feedbacks em insights acionáveis para empresas de todos os tamanhos.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold mb-4">Produto</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="/features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                                <li><a href="/pricing" className="hover:text-white transition-colors">Preços</a></li>
                                <li><a href="/integrations" className="hover:text-white transition-colors">Integrações</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold mb-4">Empresa</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="/about" className="hover:text-white transition-colors">Sobre nós</a></li>
                                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="/careers" className="hover:text-white transition-colors">Carreiras</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold mb-4">Suporte</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="/help" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                                <li><a href="/contact" className="hover:text-white transition-colors">Contato</a></li>
                                <li><a href="/status" className="hover:text-white transition-colors">Status do Sistema</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} OpinApp. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}