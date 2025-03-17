import { Request, Response } from 'express';
import Task from '../models/Task';

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.render('index', { tasks });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Add a new task
export const addTask = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        if (!title) return res.redirect('/');
        await new Task({ title }).save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Toggle task completion
export const toggleTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            task.completed = !task.completed;
            await task.save();
        }
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
