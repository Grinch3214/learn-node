import express from 'express';
import commentsRouter from './comments.js';
import { getRootHandler } from '../controllers/root.js';

const router = express.Router();

router.get('/', getRootHandler);
router.use('/comments', commentsRouter);

export default router;
