const axios = require('axios');

module.exports = {
    //getWildPokemon will send three requests to the pokeAPI, to get three random pokemon.
    getWildPokemon: (req, res) => {
        //pokemonArr stores the wildPokemon recieved from the pokeAPI
        const pokemonArr = [];
        //rand1, rand2, and rand3 are randomly generated numbers. Math.random gives a random number between 0 and 1. This is multiplied by 151 to account for the 151 original Pokemon. Math.ceil is then used to always round up one number if there is a decimal, ensuring the number will be between 1 and 151.
        const rand1 = Math.ceil(Math.random() * 151);
        const rand2 = Math.ceil(Math.random() * 151);
        const rand3 = Math.ceil(Math.random() * 151);

        //requests to the pokeAPI, passing in each random number. The response is then pushed onto the pokemonArr, and then triggers the next axios request until all three have been complete. The pokemonArr is then sent to the client-side.
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`).then(response => {
            pokemonArr.push(response.data);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`).then(response => {
                pokemonArr.push(response.data);
                axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`).then(response => {
                    pokemonArr.push(response.data);
                    res.status(200).send(pokemonArr);
                })
            })
        }).catch(err => res.status(500).send(err));
    }
}