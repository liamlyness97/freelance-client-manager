ALTER TABLE `session` ADD `inpersonated_by` text;--> statement-breakpoint
ALTER TABLE `user` ADD `banned` integer;--> statement-breakpoint
ALTER TABLE `user` ADD `banned_reason` text;--> statement-breakpoint
ALTER TABLE `user` ADD `ban_expires` integer;