-- CreateEnum
CREATE TYPE "dev_type" AS ENUM ('developer', 'publisher', 'both');

-- CreateEnum
CREATE TYPE "download_type" AS ENUM ('installed', 'not_installed', 'in_progress');

-- CreateEnum
CREATE TYPE "ev_type" AS ENUM ('sale', 'giveaway', 'free weekend');

-- CreateEnum
CREATE TYPE "fr_status" AS ENUM ('pending', 'accepted', 'blocked');

-- CreateEnum
CREATE TYPE "own_type" AS ENUM ('rented', 'wishlist', 'purchased');

-- CreateTable
CREATE TABLE "achievements" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "icon" VARCHAR(2083) NOT NULL,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devs" (
    "id" SERIAL NOT NULL,
    "dev_name" VARCHAR(50) NOT NULL,
    "contacts" JSON NOT NULL,
    "logo" VARCHAR(2083),
    "dev_type" "dev_type" NOT NULL,

    CONSTRAINT "devs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "discount" DECIMAL(5,2),
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "type" "ev_type" NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friends" (
    "user_id" INTEGER NOT NULL,
    "friend_id" INTEGER NOT NULL,
    "status" "fr_status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "friends_pkey" PRIMARY KEY ("user_id","friend_id")
);

-- CreateTable
CREATE TABLE "game_dev_connection" (
    "game_id" INTEGER NOT NULL,
    "dev_id" INTEGER NOT NULL,

    CONSTRAINT "game_dev_connection_pkey" PRIMARY KEY ("game_id","dev_id")
);

-- CreateTable
CREATE TABLE "game_news" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "content" TEXT NOT NULL,
    "published_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_tag_connection" (
    "game_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "game_tag_connection_pkey" PRIMARY KEY ("game_id","tag_id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "price" DECIMAL(6,2),
    "release_date" DATE NOT NULL,
    "age_rating" VARCHAR(3) NOT NULL,
    "cover" VARCHAR(2083) NOT NULL,
    "description" TEXT,
    "system_requirements" JSON NOT NULL,
    "base_game_id" INTEGER,
    "is_multiplayer" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libraries" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "hours_played" INTEGER NOT NULL DEFAULT 0,
    "ownership" "own_type" NOT NULL,
    "download_status" "download_type",

    CONSTRAINT "libraries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "content" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saves" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "save_data" JSON NOT NULL,
    "last_updated" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "tag_name" VARCHAR(25) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_achieve_connection" (
    "user_id" INTEGER NOT NULL,
    "achievement_id" INTEGER NOT NULL,

    CONSTRAINT "user_achieve_connection_pkey" PRIMARY KEY ("user_id","achievement_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "region" CHAR(2) NOT NULL,
    "avatar" VARCHAR(2083),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devs_dev_name_key" ON "devs"("dev_name");

-- CreateIndex
CREATE UNIQUE INDEX "games_title_key" ON "games"("title");

-- CreateIndex
CREATE UNIQUE INDEX "libraries_user_id_game_id_key" ON "libraries"("user_id", "game_id");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_user_id_game_id_key" ON "reviews"("user_id", "game_id");

-- CreateIndex
CREATE UNIQUE INDEX "saves_user_id_game_id_key" ON "saves"("user_id", "game_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_tag_name_key" ON "tags"("tag_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_friend_id_fkey" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_dev_connection" ADD CONSTRAINT "game_dev_connection_dev_id_fkey" FOREIGN KEY ("dev_id") REFERENCES "devs"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_dev_connection" ADD CONSTRAINT "game_dev_connection_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_news" ADD CONSTRAINT "game_news_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_tag_connection" ADD CONSTRAINT "game_tag_connection_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "game_tag_connection" ADD CONSTRAINT "game_tag_connection_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_base_game_id_fkey" FOREIGN KEY ("base_game_id") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "libraries" ADD CONSTRAINT "libraries_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "libraries" ADD CONSTRAINT "libraries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "saves_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "saves" ADD CONSTRAINT "saves_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_achieve_connection" ADD CONSTRAINT "user_achieve_connection_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "achievements"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_achieve_connection" ADD CONSTRAINT "user_achieve_connection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
