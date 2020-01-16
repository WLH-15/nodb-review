import React from 'react';
import Pokemon from './Pokemon';

//Pokedex recieves props from App (pokemonCaught, rename, and releasePokemon). This component maps of the array of caught pokemon and passes each property of each object into the Pokemon component to be displayed. The methods rename and releasePokemon are also passed to Pokemon, where they will be invoked.
const Pokedex = (props) => {
    return (
        <div className="pokedex">
            {/* map can be used inside the JSX. Place it where you would like mapped items to display. */}
            {props.pokemonList.map((element) => {
                return (
                    <Pokemon 
                        key={element.id}
                        name={element.name}
                        img={element.img}
                        id={element.id}
                        renameFn={props.renameFn}
                        releaseFn={props.releaseFn}/>
                )
            })}
        </div>
    )
}

export default Pokedex;