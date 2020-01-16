//pokemonCaught is the array for storing pokemon as they are caught on the client-side.
const pokemonCaught = [];
//id tracks the current id value that will be passed into new objects.
let id = 0;

//module.exports allows everything in its object to be required into another file(see server/index.js)
module.exports = {
    //getAllPokemon responds with the pokemonCaught array.
    getAllPokemon: (req, res) => {
        res.status(200).send(pokemonCaught)
    },
    //catch creates a new object based on the information recieved from the req.body, as well as an id from the variable above.
    catch: (req, res) => {
        const {name, img} = req.body;
        const pokemonObj = {
            name,
            img,
            id: id++
        }
        pokemonCaught.push(pokemonObj);
        res.status(200).send(pokemonCaught);
    },
    //rename is the put request. This put request recieves two values, one from req.params(used to find the object being updated), and req.body(data that will update the object). findIndex is used to find the object who's id matches the id passed in the req.params. Once found, notation is used to access the name key, and reassign its value to the name passed into from the req.body.
    rename: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught[index].name = name;
        res.status(200).send(pokemonCaught);
    },
    //release takes an id from req.params, used to find the object being deleted. findIndex is used to find the object who's id matches the passed in id. Splice is then used to remove the item from the array.
    release: (req, res) => {
        const {id} = req.params;
        
        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught.splice(index, 1);
        res.status(200).send(pokemonCaught);
    }
}