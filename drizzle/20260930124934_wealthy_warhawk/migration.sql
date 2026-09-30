CREATE TABLE `tickets` (
	`id` text PRIMARY KEY,
	`title` text NOT NULL,
	`content` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`priority` text DEFAULT 'low' NOT NULL,
	`client_id` text,
	`company_id` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	CONSTRAINT `fk_tickets_client_id_user_id_fk` FOREIGN KEY (`client_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_tickets_company_id_company_id_fk` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE CASCADE
);
