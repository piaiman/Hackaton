exports.up = function(knex) {
    return knex.schema.createTable('event', function(table) {
        table.increments();
        table.string('eve_id').primary();
        table.string('eve_title').notNullable();
        table.string('eve_descricao').notNullable();
        table.dateTime('eve_data').notNullable();
        table.dateTime('eve_responsavel').notNullable();
        table.string('eve_status').notNullable();
       
        table.string('eve_jov_id').notNullable();

        table.foreign('eve_jov_id').references('jov_id').inTable('jovem');
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('event');
};