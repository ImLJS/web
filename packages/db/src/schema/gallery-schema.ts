import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const gallery = pgTable("gallery", {
	id: serial("id").primaryKey(),
	username: text("username").notNull(),
	handle: text("handle").notNull(),
	source: text("source").notNull(),
	fileId: text("file_id").notNull(),
	width: integer("width").notNull().default(0),
	height: integer("height").notNull().default(0),
	previewUrl: text("preview_url").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
});
