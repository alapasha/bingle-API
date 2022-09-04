const express = require('express')
const _ = require('lodash')

const item_uc = require("../usecase/item")

const router = express.Router()

router.get('/', async function (req, res){
    let category_item = req.query['category']
    let option = null
    if (typeof category_item !== "undefined") {
        option = {
            category_item: category_item
        }
    }

    let item = await item_uc.getListItem(option)
    let res_data = {
        "status": "ok",
        "message": "success",
        "data": item
    }
    res.json(res_data)
})

router.get('/detail/:id', async function (req, res) {
    let id = parseInt(req.params['id'])
    let res_data = {
        "status": "ok",
        "message": "success",
        "data": null
    }
    let item = await item_uc.getItemByID(id)
    if (item === null) {
        res_data.status = 'failed'
        res_data.message = 'item not found'
        res.status(400)
    }
    res_data.data = item
    res.json(res_data)
})

module.exports = router