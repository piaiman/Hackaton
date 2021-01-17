
exports.up = function(knex) {
    return knex.schema.createTable('course', function(table) {
        table.increments();
        table.string('cou_id').primary();
        table.string('cou_title').notNullable();
        table.string('cou_descricao').notNullable();
        table.dateTime('cou_dataInit').notNullable();
        table.dateTime('cou_dataEnd').notNullable();
        table.string('cou_status').notNullable();
       
        table.string('cou_jov_id').notNullable();

        table.foreign('cou_jov_id').references('jov_id').inTable('jovem');
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('course');
};

