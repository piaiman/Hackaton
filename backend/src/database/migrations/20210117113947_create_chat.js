
exports.up = function(knex) {
    return knex.schema.createTable('chat', function(table) {
        table.increments();

        table.string('chat_id').primary();
        table.string('chat_message').notNullable();

            table.string('chat_jov_id').notNullable();
            table.string('chat_ins_id').notNullable();
            table.string('chat_cou_id').notNullable();
               
            table.foreign('chat_jov_id').references('jov_id').inTable('jovem');
            table.foreign('chat_inst_id').references('inst_id').inTable('instructor');
            table.foreign('chat_cou_id').references('cou_id').inTable('course');

    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('chat');
};