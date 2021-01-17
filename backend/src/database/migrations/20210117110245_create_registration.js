
exports.up = function(knex) {
    exports.up = function(knex) {
        return knex.schema.createTable('registration', function(table) {
            table.increments();
            table.string('reg_id').primary();

            table.string('res_jov_id').notNullable();
            table.string('res_cou_id').notNullable();
               
            table.foreign('res_jov_id').references('jov_id').inTable('jovem');
            table.foreign('res_cou_id').references('cou_id').inTable('course');

        });
      
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTable('registration');
    };
};

