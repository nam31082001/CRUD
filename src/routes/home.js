const express=require('express')
const router=express.Router()
const homeController=require('../app/Controllers/homeController')
router.post('/store',homeController.store)
router.get('/',homeController.get)

module.exports = router;