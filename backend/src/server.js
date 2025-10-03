import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { hashPassword, verifyPassword } from "./utils/hashPassword.js";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OpinApp API rodando!");
});

// Cadastro de usuário
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "E-mail já cadastrado." });
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { name, email, hashedPassword },
    });
    res
      .status(201)
      .json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar usuário." });
  }
});

// Login de usuário
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado." });
    }
    const valid = await verifyPassword(user.hashedPassword, password);
    if (!valid) {
      return res.status(401).json({ error: "Senha incorreta." });
    }
    res.json({
      message: "Login realizado com sucesso!",
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});