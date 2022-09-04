module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Items", [
            {
                merk_item:"dummy",
                nama_item: "dummy super",
                category_item: "reels",
                harga_item: 123456,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {})
    }
}
