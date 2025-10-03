'use client';

import { useState } from 'react';

export default function ContactPage() {
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
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium">Início</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium">Sobre</a>
              <a href="/#precos" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium">Preços</a>
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
              <a href="/#precos" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-2">Preços</a>
             

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

      {/* Conteúdo da página Contact */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-foreground mb-6">Contato</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Entre em contato conosco para tirar dúvidas, enviar feedback ou solicitar suporte.
        </p>
        {/* Exemplo simples de formulário de contato */}
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-left font-medium mb-1 text-foreground">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left font-medium mb-1 text-foreground">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seuemail@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left font-medium mb-1 text-foreground">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Escreva sua mensagem aqui"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
