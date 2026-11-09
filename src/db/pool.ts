import { Pool } from "pg";
import { loadEnvFile } from "process";
loadEnvFile();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
