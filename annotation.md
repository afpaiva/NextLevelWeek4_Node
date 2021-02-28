1- Express:
```
yarn add express
```
2- Dependencia com tipos:
```
npm i --save-dev @types/express
yarn add @types/express -D
```
2.1-Para rodar TypeScript:
```
yarn add typescript -D
```
2.2- Para inicializar TypeScript:
```
yarn tsc --init
```
2.3- Para converter para JavaScript:
```
yarn add ts-node-dev -D
```
2.4- Adicionar no package.json
```json
{
    "scripts":{
        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
    }
}
```
-----------
TYPE ORM
Extensão para otimizar conexão com BD.
```
https://typeorm.io/#/
```
```
yarn add typeorm reflect-metadata
```
Database SQLite (banco de dados em memória)
Em produção não usa-se ele.
```
yarn add sqlite3
```
Cria o arquivo ormconfig.json
```
{
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": ["./src/database/migrations/**.ts"],
    "cli" :{
        "migrationsDir": "./src/database/migrations"
    }
}
```
Para criar o arquivo de migrations:
```
yarn typeorm migration:create -n CreateUsers
```
Editar o arquivo gerado para criar uma tabela

Executar o comando para criar:
```
yarn typeorm migration:run
```
Caso queira reverter:
```
yarn typeorm migration:revert
```


Biblioteca para inserção dos ids
```
yarn add uuid
yarn add @types/uuid -D
```
--------------------------------

TESTS

```
yarn add jest @types/jest -D
yarn jest --init
// environment = node
```
em jest.config.ts
```
  bail: true,

    testMatch: [
    "**/__tests__/*.test.ts"
    ],

    preset: "js-test",
```
```
yarn add ts-jest -D
```

```
yarn add supertest @types/supertest
```

--------------------------------
NODEMAILER
```
yarn add nodemailer @types/nodemailer
```

-------------------------------

HANDLEBARS
permite um template customizado para corpo do email
```
yarn add handlebars
```