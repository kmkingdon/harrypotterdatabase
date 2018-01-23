const database = require("./database-connection");

module.exports = {
    list(){
      return database("harrypotter").select();
    },
    read(id){
      return database("harrypotter").select().where("id", id).first();
    },
    create(profile){
      return database("harrypotter")
            .insert(profile)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, profile){
      return database("harrypotter")
            .update(profile)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
      return database("harrypotter").delete().where("id", id);
    }
};
