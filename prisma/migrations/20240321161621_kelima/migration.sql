-- CreateTable
CREATE TABLE `Marketing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penjualan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaaction_number` VARCHAR(191) NOT NULL,
    `marketing_id` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `cargo_fee` INTEGER NOT NULL,
    `total_balance` INTEGER NOT NULL,
    `grand_total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount_paid` INTEGER NOT NULL,
    `remaining_balance` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `month` VARCHAR(191) NOT NULL,
    `sales` DECIMAL(20, 2) NOT NULL,
    `commission_percentage` DECIMAL(5, 2) NOT NULL,
    `commission_nominal` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
