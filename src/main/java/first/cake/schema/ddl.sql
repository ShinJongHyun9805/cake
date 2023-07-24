-- 채팅방
CREATE TABLE `cake`.`cake_chatting_room` (
             `room_id` VARCHAR(28) NULL,
             `store_name` VARCHAR(20) NULL,
             `customer_id` VARCHAR(30) NULL,
             `user_count` INT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- 채팅방 로그
CREATE TABLE `cake`.`cake_chat_log` (
            `room_id` VARCHAR(45) NULL,
            `sender` VARCHAR(45) NULL,
            `message` VARCHAR(1024) NULL,
            `time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP)
    ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- user 테이블
CREATE TABLE `cake`.`cake_user` (
    `id` VARCHAR(20) NOT NULL,
    `name` VARCHAR(10) NOT NULL,
    `nickname` VARCHAR(10) NOT NULL,
    `pw` VARCHAR(30) NOT NULL,
    `phone_no` VARCHAR(13) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `shop_yn` VARCHAR(1) NULL DEFAULT 'N' COMMENT '사장님인지 여부',
    `reg_dt` DATETIME NULL,
    `mod_dt` DATETIME NULL,
    PRIMARY KEY (`id`))
COMMENT = 'user 정보';
