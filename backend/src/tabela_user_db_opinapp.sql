CREATE TABLE opinapp.users (
    id SERIAL PRIMARY KEY,                -- Identificador único automático
    nome VARCHAR(100),                    -- Nome completo
    email VARCHAR(100) UNIQUE NOT NULL,   -- Email único e obrigatório
    senha_hash VARCHAR(255) NOT NULL,     -- Senha criptografada
    empresa VARCHAR(100),                 -- Empresa vinculada
    plano VARCHAR(20),                    -- Tipo de plano contratado
    data_cadastro TIMESTAMP DEFAULT NOW(),-- Data/hora do cadastro
    perfil_json JSONB,                    -- Dados flexíveis do perfil
    notificacoes JSONB                    -- Configurações de notificações
);
