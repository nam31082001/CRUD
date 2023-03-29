const express=require('express')
const router=express.Router()
const homeController=require('../app/Controllers/homeController')
router.put('/store/:id',homeController.save)
router.get('/:id/update',homeController.update)
router.post('/delete/:id',homeController.delete)
router.post('/store',homeController.store)
router.get('/',homeController.get)

module.exports = router;