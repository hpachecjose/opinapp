// backend/src/dbTest.js
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils/hashPassword.js"; // supondo que exista

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: "henrique@example.com" } });
  if (!existing) {
    const hashed = await hashPassword("123456");
    const user = await prisma.user.create({
      data: {
        name: "Henrique",
        email: "henrique@example.com",
        hashedPassword: hashed   // <--- usar hashedPassword para ficar consistente com server.js
      }
    });
    console.log("Usuário criado:", user);
  } else {
    console.log("Usuário já existe:", existing);
  }

  const users = await prisma.user.findMany();
  console.log("Usuários no banco:", users);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
