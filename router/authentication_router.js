const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")

const user_uc = require('../usecase/user')

router.post('/login', async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let res_data = {
        status : 'gagal',
        message : 'username atau password salah',
        data : null
    }

    let user = await user_uc.getUserByUsername(username)
    if(user === null) {
        return res.status(400).json(res_data)
    }
    if (bcrypt.compareSync(password, user.password) !== true) {
        return res.status(400).json(res_data)
    }

    res_data.status = 'ok'
    res_data.message = 'berhasil'
    res_data.data = user

    return res.json(res_data)
})

router.post('/register', async (req, res) => {
    let user = {
        full_name : req.body.full_name,
        username : req.body.username
    }
    let password = bcrypt.hashSync(req.body.password, 12)
    let res_data = {
        status : 'gagal',
        message : '',
        data : null
    }
    let user_res = await user_uc.getUserByUsername(user.username)
    if(user_res !== null) {
        res_data.message = 'buat username yang lain!'
        return res.status(400).json(res_data)
    }

    user.password = password
    let create_res = await user_uc.createUser(user)
    if(create_res.is_success !== true) {
        res_data.message = 'terjadi kesalahan'
        return res.status(400).json(res_data)
    }
    res_data.status = 'ok'
    res_data.message = 'berhasil'
    res_data.data = create_res.user

    res.json(res_data)
})
module.exports = router