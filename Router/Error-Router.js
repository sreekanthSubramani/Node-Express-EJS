const express = require('express')
const errRouter = express.Router()

errRouter.use((req, res)=>{
    res.status(404).render('ErrorOccured.ejs',({
        pageTitle : "Error Page"
    }))
})


module.exports = errRouter;