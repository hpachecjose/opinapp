"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigationItems = [
        { href: "/", label: "Voltar à página inicial" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de recuperação de senha
        console.log("Solicitação de recuperação para:", email);
        setIsSubmitted(true);
    };

    return (
        <div className="font-sans min-h-screen bg-background overflow-x-hidden flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200/30 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded"
                            aria-label="OpinApp - Página inicial"
                        >
                            <img
                                src="/opinapp_logo_rb.png"
                                alt="OpinApp Logo"
                                className="h-8 sm:h-40 w-auto transition-opacity hover:opacity-90"
                                width={120}
                                height={40}
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8" aria-label="Navegação principal">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 px-1 rounded-md hover:bg-gray-50 cursor-pointer"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="/login"
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2 px-3 rounded-md hover:bg-gray-50 cursor-pointer"
                            >
                                Login
                            </a>
                            <a
                                href="/enrollment"
                                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg shadow-md cursor-pointer"
                            >
                                Inscrever-se
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
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
                        className={`lg:hidden border-t border-gray-100 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
                            }`}
                    >
                        <nav className="flex flex-col space-y-2" aria-label="Navegação mobile">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3 px-4 rounded-md hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                                <a
                                    href="/login"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3 text-center rounded-md hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </a>
                                <a
                                    href="/enrollment"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg text-center shadow-md cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Inscrever-se
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-foreground">
                            Recuperar senha
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {isSubmitted 
                                ? "Verifique seu e-mail para continuar"
                                : "Digite seu e-mail para receber as instruções de recuperação"
                            }
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="seuemail@exemplo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                <p>
                                    Enviaremos um link de recuperação para o e-mail informado. 
                                    O link expirará em 1 hora por questões de segurança.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                            >
                                Enviar instruções
                            </button>
                        </form>
                    ) : (
                        <div className="mt-8 space-y-6 text-center">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <svg
                                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <h3 className="text-lg font-medium text-green-800 mb-2">
                                    E-mail enviado com sucesso!
                                </h3>
                                <p className="text-green-700 text-sm">
                                    Enviamos as instruções de recuperação para <strong>{email}</strong>. 
                                    Verifique sua caixa de entrada e a pasta de spam.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href="/login"
                                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer block text-center"
                                >
                                    Voltar para o login
                                </a>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setEmail("");
                                    }}
                                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 cursor-pointer"
                                >
                                    Tentar outro e-mail
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Lembrou sua senha?{" "}
                            <a
                                href="/login"
                                className="text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
                            >
                                Fazer login
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-auto">
                <div className="container mx-auto px-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} OpinApp. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}