const knex = require('knex');
const configurations = require('../../knexfile');//importar as configuracoes do knect

const connection = knex(configurations.development);//Conexao de  desemvolvedor dentro do arquivo knexfile 

module.exports = connection;