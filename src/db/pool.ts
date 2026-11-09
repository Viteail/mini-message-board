import { existsSync } from "fs";
import { Pool } from "pg";
import { loadEnvFile } from "process";
if (existsSync(".env")) loadEnvFile();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
