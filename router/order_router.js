const express = require('express')

const order_uc = require ('../usecase/order')
const {or} = require("sequelize")

const router = express.Router()

router.get('/', async (req, res) => {
    let id = 1
    let res_data = {
        status: 'ok',
        message: 'success',
        data: null
    }
    res_data.data = await order_uc.getPendingOrderByUserID(id)
    res.json(res_data)
})

router.post('/add', async (req, res) => {
    let id = 1 
    let items = req.body.items
    let order  = await order_uc.getPendingOrderByUserID(id)

    let res_data = {
        status: 'failed',
        message: 'terjadi kesalahan',
        data: null
    }
    if(order === null) {
        let create_res = await order_uc.createOrder(id, items)
        if (create_res.is_success !== true) {
            return res.status(400).json(res_data)
        }
    } else {
        await order_uc.addOrderDetails(order.id, items)
    }
    order = await order_uc.getPendingOrderByUserID(id)

    res_data.status = 'ok',
    res_data.message = 'success'
    res_data.data = order

    res.json(res_data)
})

router.post('/submit', async (req, res) => {
    res.json({})
})

module.exports = router