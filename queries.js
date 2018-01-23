const database = require("./database-connection");

module.exports = {
    list1(){
      return database("harrypotter").select();
    },
    list2(){
      return database("comments").select();
    },
    read(id){
      return database("harrypotter").select().where("id", id).first();
    },
    create1(profile){
      return database("harrypotter")
            .insert(profile)
            .returning("*")
            .then(record => record[0]);
    },
    create2(comment){
      return database("comments")
            .insert(comment)
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
