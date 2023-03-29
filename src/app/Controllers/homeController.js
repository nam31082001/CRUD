const Todo = require('../models/Todo')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

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
    delete(req, res, next) {
        const { id } = req.params
        Todo.findOneAndDelete(id)
            .then(() => res.redirect('/'))
            .catch(next)
    }
    update(req, res, next) {
        const { id } = req.params
        Todo.findById(id)
            .then(todo => res.render('update',
                { todo: mongooseToObject(todo) }
            ))
            .catch(next)

    }
    save(req,res,next){
        Todo.updateOne({_id:req.params.id},req.body)
        .then(()=>res.redirect('/'))
        .catch(next)
    }
}
module.exports = new homeController();