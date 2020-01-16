import React, {Component} from 'react';

//The Grass component is responsible for invoking the catchPokemon method(originating in App), invoking the refreshPokemon method(from Finder), and the display of each wild pokemon.
class Grass extends Component {
    //catchPokemon first invokes the catchPokemon method, passing in the necessary information for the req.body. After catchPokemon is invoked, refreshPokemon is invoked to get a new set of wild pokemon.
    catchPokemon(){
        this.props.catchFn({
            name: this.props.pokemon.name,
            img: this.props.pokemon.sprites.front_default
        })
        this.props.refreshFn();
    }

    render(){
        return(
            <div className="grass">
                <img
                    onClick={() => this.catchPokemon()} 
                    src={this.props.pokemon.sprites.front_default} 
                    alt={this.props.pokemon.name}/>
            </div>
        )
    }
}

export default Grass;