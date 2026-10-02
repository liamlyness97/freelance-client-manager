CREATE TABLE `ticket_messages` (
	`id` text PRIMARY KEY,
	`message` text NOT NULL,
	`ticket_id` text NOT NULL,
	`user_id` text NOT NULL,
	CONSTRAINT `fk_ticket_messages_ticket_id_tickets_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `tickets`(`id`),
	CONSTRAINT `fk_ticket_messages_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);
