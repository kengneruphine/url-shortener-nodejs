import 'dotenv/config';

export default {
  app_env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 9000,
  pg_user: process.env.PGUSER,
  pg_host: process.env.PGHOST,
  pg_port: process.env.PGPORT,
  pg_database: process.env.PGDATABASE
}