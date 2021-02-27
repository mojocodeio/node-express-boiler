const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const lockerSchema = new mongoose.Schema({
    id: { type: mongoose.ObjectId, required: true },
    isAvailable: { type: Boolean, required: true },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    number: { type: Number, required: true }
}, { collection: 'lockers' })

lockerSchema.plugin(mongoosePaginate)

const Locker = mongoose.model('Locker', lockerSchema, 'lockers')

module.exports = Locker