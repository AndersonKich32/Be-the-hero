
//Metoso up cria a tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
          table.string('id').primary(),
          table.string('name').notNullable(),
          table.string('email').notNullable(),
          table.string('watsapp').notNullable(),
          table.string('city').notNullable(),
          table.string('uf', 2).notNullable()
      })
    };
    
    //Metodo down deleta a tabela se ouver algum problema 
    exports.down = function(knex) {
       return knex.schema.dropTable('ongs')
    };
    
