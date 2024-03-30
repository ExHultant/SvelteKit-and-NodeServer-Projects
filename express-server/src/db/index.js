//cliente de nuestra base de datos
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema.js'

const client = postgres(process.env.CONNECTION_STRING);

export const db = drizzle(client, {schema});