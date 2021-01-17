
exports.up = function(knex) {
    return knex.schema.createTable('instructor', function(table) {
        table.increments();
        table.string('ins_id').primary();
        table.string('ins_nome').notNullable();
        table.string('ins_email').notNullable();
        table.string('ins_whatsapp').notNullable();
        table.string('ins_status').notNullable();

    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('instructor');
};