const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    description: { type: String },
    timestamp: { type: Date, default: Date.now() },
    name: { type: String },
    difficulty: { type: Number, default: 5, min: 0, max: 10 },
    user_id: { type: mongoose.ObjectId, required: true }
}, { collection: 'workouts' });

const Workout = mongoose.model('Workout', workoutSchema, 'workouts');

module.exports = Workout;