import express from 'express';
import {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteCommentHandler,
} from '../controllers/comments.js';

const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteCommentHandler);

export default router;
