import React, {useState} from 'react';



const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreeingStyled = (props) => {

    const [loggedIn, setloggedIn] = useState(false);


    const Logear = () => {
        setloggedIn(!loggedIn);
    }
 
    return (
        <div style={ loggedIn ? loggedStyle : unloggedStyle}>
            {loggedIn 
            ? 
            (<h1>Hola, {props.name}</h1>) 
            : 
            (<h1>Please Log In</h1>)}

            <button onClick={Logear}> {loggedIn ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default GreeingStyled;
