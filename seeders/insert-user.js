
const bcrypt = require('bcrypt')
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [
            {
                full_name:"Admin",
                username: "admin",
                password: bcrypt.hashSync('123456',12),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {})
    }
}
