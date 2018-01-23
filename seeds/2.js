exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {id: 1,
          name: 'Kevin',
          comment:'How are you doing?',
          harrypotter_id:1
        },
        {id: 2,
          name: 'Hermione',
          comment:'When are we going to study the dark arts?',
          harrypotter_id:1
        },
        {id: 3,
          name: 'Harry',
          comment:'Meet me at the bridge?',
          harrypotter_id:2
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 4;");
      });
  });
};
