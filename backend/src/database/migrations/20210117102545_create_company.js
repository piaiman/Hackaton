

exports.up = function(knex) {
    return knex.schema.createTable('company', function(table) {
        table.increments();
        table.string('com_id').primary();
        table.string('com_CNPJ').notNullable();
        table.string('com_razaoSocial').notNullable();
        table.string('com_representante').notNullable();
        table.string('com_descricao').notNullable();
        table.string('com_email').notNullable();
        table.string('com_telefone').notNullable();      
        table.string('com_city').notNullable();
        table.string('com_uf',2).notNullable();
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');
};