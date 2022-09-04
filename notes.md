notes:
sequelize db:create
npm install -g pg

Langkah2:

1. npx sequelize model:generate --name User --attributes full_name:string,username:string,password:string

2. sequelize db:migrate

3. sequelize db:seed:

4. sequelize db:seed:all

5. npx sequelize model:generate --name Item --attributes merk_item:string,nama_item:string,category_item:string,harga_item:integer