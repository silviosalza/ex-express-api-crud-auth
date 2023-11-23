/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `post`;

-- CreateTable
CREATE TABLE `Post table` (
    `title` VARCHAR(30) NOT NULL,
    `slug` VARCHAR(60) NOT NULL,
    `image` TEXT NULL,
    `content` TEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Post table_slug_key`(`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
