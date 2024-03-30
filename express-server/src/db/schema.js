import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }),
    lastname: varchar('lastname', { length: 100 }),
    age: integer('age'),
    email: varchar('email', { length: 100 }).unique(),
});

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).unique(),
});

export const userRoles = pgTable('user_roles', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id, { onDelete: 'no action', onUpdate: 'cascade' }),
    roleId: integer('role_id').references(() => roles.id, { onDelete: 'no action', onUpdate: 'cascade' }),
});