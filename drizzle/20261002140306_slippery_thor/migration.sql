ALTER TABLE `ticket_messages` ADD `created_at` integer DEFAULT (unixepoch()) NOT NULL;--> statement-breakpoint
ALTER TABLE `ticket_messages` ADD `updated_at` integer DEFAULT (unixepoch()) NOT NULL;