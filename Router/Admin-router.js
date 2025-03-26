const express = require('express')
const adminRouter = express.Router()
const adminController = require('../Controller/Admin-Controller')

adminRouter.get('/form', adminController.getAddProdsPage)
adminRouter.get('/admin-contoller', adminController.adminPageRenderer)
adminRouter.post('/admin-contoller/:productId', adminController.uniqueProdsRender)
adminRouter.post('/delete', adminController.deleteProds)

module.exports = adminRouter;