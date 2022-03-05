import React, { Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
          contador: 0
        }; 
    }
    botonIncrementar = () =>{this.setState({contador: this.state.contador+1})};
    
    botonMeEquivoqueDeEdad = () =>{ this.setState({contador: this.state.contador-1})};

    render(){
        const {firstName,lastName,age,hairColor} = this.props;
        return(
            <div>
                <h1>{lastName} , {firstName} </h1>
                <p>Age: {age+ this.state.contador},  </p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.botonIncrementar}>Boton de cumpleaños de {firstName} {lastName}</button><br />
                <button onClick={this.botonMeEquivoqueDeEdad}>Me equivoque en la edad </button>
            </div>
        )
    }
}

export default PersonCard;