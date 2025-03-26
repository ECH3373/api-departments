import express from 'express';
import 'express-async-errors';
import { department } from './features/department/index.js';

export const app = express();

app.use(express.json());

app.use('/api/v1/departments', department.router);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'An error occurred while processing the request' });
});
