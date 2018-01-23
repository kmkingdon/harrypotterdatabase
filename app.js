const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/profiles", (request, response) => {
    queries.list().then(profiles => {
        response.json({profiles});
    }).catch(console.error);
});

app.get("/profiles/:id", (request, response) => {
    queries.read(request.params.id).then(game => {
        game
            ? response.json({game})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/profiles", (request, response) => {
    queries.create(request.body).then(game => {
        response.status(201).json({game});
    }).catch(console.error);
});

app.delete("/profiles/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/profiles/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(game => {
        response.json({game});
    }).catch(console.error);
});

app.use((request, response) => {
    response.send(404);
});

app.listen(process.env.PORT || 3000);
