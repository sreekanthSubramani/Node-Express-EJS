const http = require('http')
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const shopRouter = require('./Router/Shop-Router')
const adminRouter = require('./Router/Admin-router')
const errRouter = require('./Router/Error-Router')

const server = http.createServer(app)

app.use(bodyParser.urlencoded({extended : false}))
app.set('view engine', 'ejs')
app.set('views', 'View')
app.use(express.static(path.join(__dirname, "/" , "Public")))

app.use(shopRouter)
app.use("/admin", adminRouter)
app.use(errRouter)

const PORT_NUM = 4000
server.listen(PORT_NUM, (e)=>{
    if(e){
        console.log(e)
    }else{
        console.log(`In ${PORT_NUM} Port server is Started !!`)
    }
})