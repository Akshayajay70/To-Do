import express from 'express';
import { getTasks, addTask, deleteTask, toggleTask } from '../controllers/taskController';

const router = express.Router();

// Routes
router.get('/', getTasks);
router.post('/add', addTask);
router.post('/delete/:id', deleteTask);
router.post('/toggle/:id', toggleTask);

export default router;