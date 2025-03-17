import mongoose from 'mongoose';

// Define Task Schema
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Create Task Model
const Task = mongoose.model('Task', TaskSchema);

export default Task;
