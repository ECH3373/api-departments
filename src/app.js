import express from 'express';
import 'express-async-errors';

export const app = express();

app.use(express.json());

//: create middlewares

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'An error occurred while processing the request' });
});
