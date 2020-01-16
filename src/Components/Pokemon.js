import React, {Component} from 'react';

//The Pokemon component handles the display of each caught pokemon, as well as invokes the methods rename and releasePokemon. toggleView is added on state to conditionally render the edit view. nameInput is stored to capture the value typed into the input on the edit view.
class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleView: false,
            nameInput: ''
        }
    }

    //toggleEdit toggles the value toggleView on state, switching the view from edit to non-edit.
    toggleEdit = () => {
        this.setState({toggleView: !this.state.toggleView});
    }

    //handleInput captures what is typed into the input box of the edit view.
    handleInput(val){
        this.setState({nameInput: val});
    }

    //updateName will invoke the rename function that was passed into it(started from App). After invoking the method, it then invokes the toggleEdit method.
    updateName = () => {
        //put request
        this.props.renameFn(this.props.id, {name: this.state.nameInput || this.props.name})
        this.toggleEdit();
    }

    //conditional rendering is applied, based on the value of toggleView on state.
    render(){
        return(
            <div>
                {this.state.toggleView
                ? (<div>
                    <input value={this.state.nameInput} onChange={(e) => this.handleInput(e.target.value)} />
                    <button onClick={this.updateName}>Update</button>
                   </div>)
                : <h3 onDoubleClick={this.toggleEdit}>{this.props.name}</h3>}
                <img src={this.props.img} alt={this.props.name} />
                <button onClick={() => this.props.releaseFn(this.props.id)}>Release</button>
            </div>
        )
    }
}

export default Pokemon;