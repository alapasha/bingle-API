// import models
const {Item} = require("../models")

module.exports = {
    getListItem: async (filters) => {
        let options = {}
        if (typeof filters !== "undefined" || filters !== null) {
            options.where = filters
        }
        let item = []
        try{
            item = await Item.findAll(options)
        } catch (e) {
            console.log(e)
        }

        return item
    },

    getItemByID: async (id) => {
        let item = null
        try{
            item =  await Item.findOne({
                where: {id: id}
            })
        } catch (e) {
            console.log(e)
        }

        return item
    },
    getItemByNamaItem: async(nama_item) => {
        let item = null
        try{
            user = await Item.findOne({
                where: {nama_item: nama_item}
            })
        } catch (e){
            console.log(e)
        }
        return item
    },
    createItem: async(item) => {
        let is_success = false
        try{
            await Item.create(item)
            is_success = true
        } catch (e) {
            console.log(e)
        }
        return {
            is_success: is_success,
            item: item
        }
    }
}