import React, {Component} from 'react';
import Grass from './Grass';
import axios from 'axios';

//The Finder component is responsible for requesting and storing the three random pokemon received from the pokeAPI(This is found on in the grassCtrl).
class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wildPokemon: []
        }
    }

    //componentDidMount invokes refreshPokemon, which requests the wild-pokemon endpoint(handler function found in the grassCtrl)
    componentDidMount(){
        this.refreshPokemon();
    }

    //refreshPokemon runs the get request for wild pokemon. It is passed down into the Grass component.
    refreshPokemon = () => {
        axios.get('/api/wild-pokemon').then(res => {
            this.setState({wildPokemon: res.data})
        }).catch(err => console.log(err));
    }

    //the wildPokemon array on state is mapped over and each object is passed into the Grass Component to be displayed. The catchPokemon and refreshPokemon methods are also passed into the Grass Component.
    render(){
        const mappedPokemon = this.state.wildPokemon.map((pokemon, i) => {
            return (
                <Grass 
                    key={i}
                    pokemon={pokemon}
                    catchFn={this.props.catchFn}
                    refreshFn={this.refreshPokemon}/>
            )
        })
        return(
            <div className="finder">
                {mappedPokemon}
            </div>
        )
    }
}

export default Finder;