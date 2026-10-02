PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_ticket_messages` (
	`id` text PRIMARY KEY,
	`message` text NOT NULL,
	`ticket_id` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	CONSTRAINT `fk_ticket_messages_ticket_id_tickets_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `tickets`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_ticket_messages_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
INSERT INTO `__new_ticket_messages`(`id`, `message`, `ticket_id`, `user_id`, `created_at`, `updated_at`) SELECT `id`, `message`, `ticket_id`, `user_id`, `created_at`, `updated_at` FROM `ticket_messages`;--> statement-breakpoint
DROP TABLE `ticket_messages`;--> statement-breakpoint
ALTER TABLE `__new_ticket_messages` RENAME TO `ticket_messages`;--> statement-breakpoint
PRAGMA foreign_keys=ON;