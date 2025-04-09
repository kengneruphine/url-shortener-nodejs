import logger from './logger';
import env from './env';
import { Pool } from 'pg'

console.log(env.pg_user, env.pg_database, env.pg_host, env.pg_port); 

const pool = new Pool({
    user: env.pg_user,
    database: env.pg_database,
    password: null,
    port: env.pg_port,
    host: env.pg_host
});


pool.connect()
    .then(()=>{
    logger.info('Database connected successfully');
    })
    .catch((err) =>{
    logger.error('Failed to connect to the database', err)
   })

export default pool;