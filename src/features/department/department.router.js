import { Router } from 'express';
import { middleware } from 'querymen';
import { controller } from './department.controller.js';
import { query } from './department.query.js';

export const router = Router();
router.get('/', middleware(query.index), controller.index);
router.get('/:id', controller.show);
