const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    description: { type: String },
    timestamp: { type: Date },
    name: { type: String },
    user_id: { type: String, required: true }
}, { collection: 'data' });

const Workout = mongoose.model('Workout', workoutSchema, 'workouts');

module.exports = Workout;