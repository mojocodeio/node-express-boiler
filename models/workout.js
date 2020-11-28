const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    description: { type: String },
    timestamp: { type: Date },
    name: { type: String },
    user_id: { type: mongoose.ObjectId, required: true }
}, { collection: 'workouts' });

const Workout = mongoose.model('Workout', workoutSchema, 'workouts');

module.exports = Workout;