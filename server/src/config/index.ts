import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_PREFIX, DB_USER, DB_PASSWORD, DB_HOST, DB_QUERY_STRING, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
