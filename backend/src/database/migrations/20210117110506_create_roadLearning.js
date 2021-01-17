
exports.up = function(knex) {
    exports.up = function(knex) {
        return knex.schema.createTable('roadLearning', function(table) {
            table.increments();
            table.string('roa_id').primary();
            table.string('roa_title').notNullable(); 
            table.string('roa_descrição').notNullable();
            table.string('roa_cursos').notNullable();
            table.string('roa_status').notNullable();

            table.string('roa_com_id').notNullable();
               

            table.foreign('roa_com_id').references('com_id').inTable('company');

        });
      
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTable('roadLearning');
    };
};

