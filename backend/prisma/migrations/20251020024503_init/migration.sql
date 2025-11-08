/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."channels" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "tipo" VARCHAR(20),
    "link" TEXT,
    "estatisticas_json" JSONB,

    CONSTRAINT "channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."feedbacks" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "opinstars" SMALLINT,
    "comentario_texto" TEXT,
    "modo" VARCHAR(20),
    "nome_cliente" VARCHAR(100),
    "email_cliente" VARCHAR(100),
    "data_envio" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "resultado_ia_json" JSONB,
    "status_moderacao" VARCHAR(20),

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."forms" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100),
    "usuario_id" INTEGER NOT NULL,
    "campos_json" JSONB,
    "status" VARCHAR(20),
    "data_criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."integrations" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "tipo" VARCHAR(50),
    "config_json" JSONB,

    CONSTRAINT "integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."logs" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER,
    "acao" TEXT,
    "data_hora" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ip" VARCHAR(45),

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reports" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "tipo" VARCHAR(20),
    "data_geracao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "caminho_arquivo" TEXT,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."settings" (
    "id" SERIAL NOT NULL,
    "chave" VARCHAR(100) NOT NULL,
    "valor_json" JSONB,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "senha_hash" VARCHAR(255) NOT NULL,
    "empresa" VARCHAR(100),
    "plano" VARCHAR(20),
    "data_cadastro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "perfil_json" JSONB,
    "notificacoes" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "settings_chave_key" ON "public"."settings"("chave");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."channels" ADD CONSTRAINT "fk_channels_form" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."feedbacks" ADD CONSTRAINT "fk_feedbacks_form" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."forms" ADD CONSTRAINT "fk_forms_usuario" FOREIGN KEY ("usuario_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."integrations" ADD CONSTRAINT "fk_integrations_usuario" FOREIGN KEY ("usuario_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."logs" ADD CONSTRAINT "fk_logs_usuario" FOREIGN KEY ("usuario_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."reports" ADD CONSTRAINT "fk_reports_form" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."reports" ADD CONSTRAINT "fk_reports_usuario" FOREIGN KEY ("usuario_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
