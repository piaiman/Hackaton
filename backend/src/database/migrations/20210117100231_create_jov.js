
exports.up = function(knex) {
    return knex.schema.createTable('jovem', function(table) {
        table.increments();
        table.string('jov_id').primary();
        table.string('jov_nome').notNullable();
        table.string('jov_CPF').notNullable();
        table.string('jov_nick').notNullable();
        table.string('jov_birth').notNullable();
        table.string('jov_email').notNullable();
        table.string('jov_whatsapp').notNullable();      
        table.string('jov_city').notNullable();
        table.string('jov_uf',2).notNullable();
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('jovem');
};
