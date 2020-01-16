import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Pokedex from './Components/Pokedex';

//App is used to house the pokemonCaught array, which gets passed down as props to the Pokedex component.
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonCaught: []
    }
    this.catchPokemon = this.catchPokemon.bind(this);
    this.rename = this.rename.bind(this);
    this.releasePokemon = this.releasePokemon.bind(this);
  }

  //catchPokemon adds a pokemon to the pokemonCaught data stored in the pokeCtrl. The method is passed down to the Finder Component.
  catchPokemon(body){
    //body is passed in during the invocation of catchPokemon(found in the Grass Component)
    axios.post('/api/pokemon', body).then(res => {
      this.setState({pokemonCaught: res.data});
    }).catch(err => console.log(err));
  }

  //rename updates the name of a caught pokemon. The method is passed down to the Pokedex component.
  rename(id, body){
    //id and body are passed in during the invocation of rename (found in the Pokemon component)
    axios.put(`/api/pokemon/${id}`, body).then(res => {
      this.setState({pokemonCaught: res.data})
    }).catch(err => console.log(err))
  }

  //releasePokemon deletes a pokemon from the pokemonCaught data stored in the pokeCtrl. The method is passed down to the Pokedex component.
  releasePokemon(id){
    //id is passed in during the invocation of releasePokemon(found in the Pokemon component)
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({pokemonCaught: res.data})
    }).catch(err => console.log(err))
  }

  render(){
    // console.log(this.state.pokemonCaught)
    return (
      <div className="App">
        <Header />
        <Finder catchFn={this.catchPokemon}/>
        <h2>Pokedex</h2>
        <Pokedex 
          pokemonList={this.state.pokemonCaught}
          renameFn={this.rename}
          releaseFn={this.releasePokemon}/>
      </div>
    )
  }
}

export default App;