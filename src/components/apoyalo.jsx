import React, {useState} from 'react';

const Apoyalo = (props) => {

    const {firstName,lastName,age,hairColor}  = props;

    const [ageUser,setageUser] = useState(age)

    const handlerageUser = () =>{
        setageUser(ageUser+1)
    }

    const errorageUser = () =>{
        setageUser(ageUser-1)
    }
    

    return (
        
        <div>
            <h1>{lastName} , {firstName} </h1>
            <p>Age: {ageUser},  </p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=>handlerageUser()}>Boton de cumpleaños de {firstName} {lastName}</button><br />
            <button onClick={()=>errorageUser()}>Me equivoque en la edad </button>
        </div>
    );
}

export default Apoyalo;
