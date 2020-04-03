const express = require('express');//Maneira de importar pelo node js
const cors = require('cors');
const app = express() //Criando o app
const routes = require('./routes')
const { errors } = require('celebrate');

app.use(cors());
app.use(express.json());//Função para converter o body em json intendivel pelo js
app.use(routes);//Agora o app pode usar as rotas disponiveis
app.use(errors());

app.listen(3333) //Rodar o app na porta 3333