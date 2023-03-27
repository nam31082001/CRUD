const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Todo = new Schema({
    name: { type: String },
    time: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})
module.exports = mongoose.model('Todos', Todo)