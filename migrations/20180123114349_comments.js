
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('comment');
    table.integer('harrypotter_id').references('harrypotter.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
