// backend/src/server.js
import 'dotenv/config';
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { hashPassword, verifyPassword } from "./utils/hashPassword.js";
import { generateToken } from "./utils/jwt.js";
import { authenticate } from "./middlewares/auth.js";

const app = express();
const prisma = new PrismaClient();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota de health check
app.get("/", (req, res) => {
  res.json({ 
    message: "OpinApp API rodando!",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// ========================================
// ROTAS DE AUTENTICAÇÃO
// ========================================

// Cadastro de usuário
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, company } = req.body;
  
  try {
    // Validação básica
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: "Nome, email e senha são obrigatórios." 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        error: "Senha deve ter no mínimo 6 caracteres." 
      });
    }

    // Verificar se email já existe
    const existing = await prisma.user.findUnique({ 
      where: { email } 
    });
    
    if (existing) {
      return res.status(400).json({ 
        error: "E-mail já cadastrado." 
      });
    }

    // Criar usuário
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        company,
        hashedPassword,
        plan: 'FREE' // Plano padrão
      },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        plan: true,
        role: true,
        createdAt: true
      }
    });

    // Gerar token JWT
    const token = generateToken(user);

    res.status(201).json({ 
      message: "Usuário cadastrado com sucesso!",
      token,
      user
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ 
      error: "Erro ao cadastrar usuário." 
    });
  }
});

// Login de usuário
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Validação básica
    if (!email || !password) {
      return res.status(400).json({ 
        error: "Email e senha são obrigatórios." 
      });
    }

    // Buscar usuário
    const user = await prisma.user.findUnique({ 
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        plan: true,
        role: true,
        hashedPassword: true,
        createdAt: true
      }
    });
    
    if (!user) {
      return res.status(401).json({ 
        error: "Email ou senha incorretos." 
      });
    }

    // Verificar senha
    const valid = await verifyPassword(user.hashedPassword, password);
    
    if (!valid) {
      return res.status(401).json({ 
        error: "Email ou senha incorretos." 
      });
    }

    // Remover hashedPassword do retorno
    const { hashedPassword, ...userWithoutPassword } = user;

    // Gerar token JWT
    const token = generateToken(userWithoutPassword);

    res.json({
      message: "Login realizado com sucesso!",
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ 
      error: "Erro ao fazer login." 
    });
  }
});

// Rota protegida de exemplo (requer autenticação)
app.get("/api/auth/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        plan: true,
        role: true,
        logoUrl: true,
        primaryColor: true,
        createdAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    res.json({ user });
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: "Erro ao buscar dados do usuário." });
  }
});

// ========================================
// INICIALIZAÇÃO DO SERVIDOR
// ========================================

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor OpinApp rodando na porta ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}`);
  console.log(`🔐 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🔴 Encerrando servidor...');
  await prisma.$disconnect();
  process.exit(0);
});