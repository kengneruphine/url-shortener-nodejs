import express from 'express';
import cors from 'cors';
import pool from '@config/db'

const app = express();
const message = 'Url shortener';

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE, OPTIONS',
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
    credentials: true,
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).send({ message }));

// handling non existing routes
app.use((req, res) => {
    res.status(404).send({ message: 'Route not found' });
});

/* THE MIDDLEWARE BELOW MUST BE LAST, SO NO NEW CODE SHOULD BE ADDED AFTER THIS LINE
 *
 * This overrides the default error handler to return a json response
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      status: err.status || 'error',
      message: err.message,
    });
});
  
  export default app;