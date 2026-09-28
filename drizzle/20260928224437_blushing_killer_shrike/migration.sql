CREATE TABLE `company` (
	`id` text PRIMARY KEY,
	`company_name` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `user` ADD `company_id` text REFERENCES company(id) ON DELETE CASCADE;