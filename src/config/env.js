import 'dotenv/config';

export default {
  app_env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 9000,
}