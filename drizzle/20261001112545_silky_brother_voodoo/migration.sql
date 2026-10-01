CREATE TABLE `projects` (
	`id` text PRIMARY KEY,
	`title` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`description` text,
	`company_id` text NOT NULL,
	`stakeholder` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	CONSTRAINT `fk_projects_company_id_company_id_fk` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_projects_stakeholder_user_id_fk` FOREIGN KEY (`stakeholder`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
