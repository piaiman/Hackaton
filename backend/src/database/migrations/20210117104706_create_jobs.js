
exports.up = function(knex) {
    return knex.schema.createTable('jobs', function(table) {
        table.increments();
        table.string('job_id').primary();
        table.string('job_title').notNullable();
        table.string('job_descricao').notNullable();
        table.string('job_requisitos').notNullable();
        table.string('job_status').notNullable();
       
        table.string('job_com_id').notNullable();

        table.foreign('job_com_id').references('com_id').inTable('company');
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};