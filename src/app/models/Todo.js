const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Todo = new Schema({
    name: { type: String,require:true },
    time: { type: String,require:true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})
module.exports = mongoose.model('Todos', Todo)