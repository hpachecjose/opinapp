# OpinApp

Resumo
-----
Aplicação front-end Next.js para visualização e gestão de feedbacks (OpinApp). Implementação atual usa dados simulados (mock) e components UI prontos. Não há backend de autenticação nem mecanismo de recuperação de senha implementado neste repositório — apenas telas e fluxo visual.

Tecnologias
----------
- Next.js (app router, React)
- Tailwind CSS
- TypeScript / JavaScript (arquivos mistos conforme o projeto)
- Estrutura: frontend/src/app (páginas e componentes)

Pré-requisitos
--------------
- Node.js 18+ instalado
- npm ou yarn (preferível npm)
- Git instalado

Instalação
----------
1. Clone o repositório:
   ```
   git clone https://github.com/hpachecjose/opinapp.git
   cd opinapp
   ```

2. Instale dependências:
   ```
   npm install
   # ou
   yarn
   ```

Como rodar (desenvolvimento)
----------------------------
1. Iniciar servidor de desenvolvimento:
   ```
   npm run dev
   # ou
   yarn dev
   ```
2. Abra no navegador:
   ```
   http://localhost:3000
   ```

Build e produção
-----------------
1. Build:
   ```
   npm run build
   # ou
   yarn build
   ```
2. Iniciar servidor (produção):
   ```
   npm start
   # ou
   yarn start
   ```

Testes
------
- Atualmente não há suíte de testes configurada no projeto. Recomenda-se adicionar Jest/React Testing Library para componentes e endpoints futuros.

Estrutura principal de diretórios
-------------------------------
- frontend/src/app — páginas (ex.: /dashboard, /forgot)
- frontend/src/components — componentes (quando presentes)
- public — assets estáticos (logos, imagens)
- scripts / configs — (se existirem)

Funcionalidades implementadas
-----------------------------
- Dashboard de exemplo com dados mock (frontend/src/app/dashboard/page.tsx).
- Página de recuperação de senha (UI) em frontend/src/app/forgot/page.tsx — apenas interface, sem lógica backend.
- Páginas e componentes UI responsivos em Tailwind.

Estado atual sobre autenticação e recuperação de senha
-----------------------------------------------------
- Não existe backend de autenticação nem endpoints de API para login, reset de senha ou envio de e-mail.
- Fluxo de UI para "Recuperar senha" está presente (frontend/src/app/forgot/page.tsx) mas o handleSubmit faz apenas log no console e altera estado local.
- Recomenda-se implementar endpoints (ex.: /api/auth/request-reset, /api/auth/reset) e tabela password_resets conforme o plano técnico proposto antes de expor ao público.

Variáveis de ambiente sugeridas (quando implementar backend)
-----------------------------------------------------------
- NEXT_PUBLIC_APP_URL=https://app.example.com
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- DATABASE_URL
- TOKEN_PEPPER (segredo para hashing de tokens)
- JWT_SECRET (se usar JWT)
- RECAPTCHA_SECRET (se usar reCAPTCHA)

Exemplos de uso
---------------
- Acesse /dashboard para ver o layout com dados simulados.
- Acesse /forgot para visualizar o formulário de recuperação (apenas UI).
- Exemplos de chamadas para quando o backend existir:
  - POST /api/auth/request-reset { email }
  - POST /api/auth/validate-token { token }
  - POST /api/auth/reset { token, newPassword }

Como contribuir
---------------
1. Fork + branch:
   ```
   git checkout -b feat/descrição-da-feature
   ```
2. Adicione mudanças claras e pequenos commits.
3. Garanta que não há segredos no commit (.env, chaves).
4. Abra Pull Request descrevendo as mudanças e testes.
5. Sugestões de boas práticas:
   - Use ESLint/Prettier
   - Escreva testes unitários para lógica crítica
   - Adicione documentação das novas rotas e variáveis de ambiente

Boas práticas de segurança (importante)
--------------------------------------
- Nunca commite .env ou chaves. Use .gitignore.
- Armazene segredos em GitHub Secrets para CI/CD.
- Implementar HTTPS, HSTS e validações de backend ao adicionar autenticação.
- Armazenar apenas hash de tokens de reset (nunca token em texto plano).

Contato / Links
---------------
- Repositório GitHub: https://github.com/hpachecjose/opinapp
- Issues / Pull Requests: usar a seção de Issues do repositório para reportar problemas ou sugerir melhorias.

Notas finais
-----------
- Este README reflete o estado atual do projeto: frontend focado em UI com dados mockados. Para produção é necessário integrar backend seguro (autenticação, recuperação de senha, gerenciamento de sessões, envio de e-mails) conforme o fluxo técnico proposto.
