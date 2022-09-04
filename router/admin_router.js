const express = require('express')
const router = express.Router()
const item_uc = require("../usecase/item")

router.post('/item/add', async(req, res) => {

 let item = {
        merk_item: req.body.merk_item,
        nama_item: req.body.nama_item,
        category_item: req.body.category_item,
        harga_item: req.body.harga_item
    }
    let res_data = {
        status: 'gagal',
        message: '',
        data : null

    }
    let item_res = await item_uc.getItemByNamaItem(item.nama_item)
    if (item_res !== null){
        res_data.message = 'item sudah ada'
        return res.status(400).json(res_data)
    }
    let create_res = await item_uc.createItem(item)
    if(create_res.is_success !== true) {
        res_data.message = 'terjadi kesalahan'
        return res.status(400).json(res_data)
    }

    res_data.status = 'ok'
    res_data.message = 'berhasil'
    res_data.data = create_res.item

    res.json(res_data)
})

module.exports = router