const Todo = require('../models/Todo')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class homeController {
    get(req, res, next) {
        Todo.find({})
            .then(todo => {
                res.render('home', { todo: mutipleMongooseToObject(todo) })
            })
            .catch(next)
    }
    store(req, res, next) {
        const todo = new Todo(req.body)
        todo.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
}
module.exports = new homeController();