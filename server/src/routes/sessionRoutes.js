import express from 'express';
import {
  getSessions,
  createSession,
  deleteSession,
} from '../controllers/sessionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getSessions)
  .post(protect, createSession);

router.route('/:id')
  .delete(protect, deleteSession);

export default router;