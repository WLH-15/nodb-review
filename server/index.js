//require packages and controllers, invoke express.
const express = require('express'),
      cors = require('cors'),
      grassCtrl = require('./controllers/grassCtrl'),
      pokeCtrl = require('./controllers/pokeCtrl'),
      app = express();

//top level middleware fires before every request. cors() allows cross origin resource sharing, while express.json() parses json to JavaScript, and then back to JSON for responses.
app.use(cors());
app.use(express.json());

//endpoints
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

app.get('/api/pokemon', pokeCtrl.getAllPokemon);
app.post('/api/pokemon', pokeCtrl.catch);
app.put('/api/pokemon/:id', pokeCtrl.rename);
app.delete('/api/pokemon/:id', pokeCtrl.release);

//app.listen allows the server to watch for requests on the specified port.
const port = 3333;
app.listen(port, () => console.log(`Server running on ${port}`));