exports.up = function(knex, Promise) {
  return knex.schema.createTable('harrypotter', table => {
    table.increments('id').primary();
    table.text('name');
    table.text('species');
    table.text('gender');
    table.text('house');
    table.text('dateOfBirth');
    table.text('ancestry');
    table.text('eyeColour');
    table.text('hairColour');
    table.json('wand');
    table.text('patronus');
    table.boolean('hogwartsStudent');
    table.boolean('hogwartsStaff');
    table.boolean('alive')
    table.text('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('harrypotter');
};
