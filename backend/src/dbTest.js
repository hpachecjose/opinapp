// backend/src/dbTest.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: "henrique@example.com" } });
  if (!existing) {
    const user = await prisma.user.create({
      data: {
        name: "Henrique",
        email: "henrique@example.com",
        password: "123456"
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
