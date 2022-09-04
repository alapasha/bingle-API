const express = require('express')
const morgan = require('morgan')
//
const app = express()
//
const authentication_router = require('./router/authentication_router')
const item_router = require('./router/item_router')
const admin_router = require('./router/admin_router')
const order_router = require('./router/order_router')
//
const host = 'localhost'
const port = 8080
//
app.set('view engine', "ejs")
//
app.use(morgan('combine'))
app.use(express.json())
//
app.get('/', function (req, res){
    res.json({
        host: host,
        port: port
    })
})

app.use(authentication_router)
app.use('/item', item_router)
app.use('/admin', admin_router)
app.use('/customer/order', order_router)

//
app.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`)
})