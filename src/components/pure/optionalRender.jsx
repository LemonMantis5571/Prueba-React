import React, {useState} from 'react';

const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {


    const [access, setaccess] = useState(false);

    const [nMesagge, setnMesagge] = useState(0);

    // const updateAccess = () => {
    //     setaccess(!access);
    // }
    
    const loginAction = () => {
        setaccess(true);
    }

    const logoutAction = () => {
        setaccess(false);
    }

    let Optionalbutton;

    // if(access) Optionalbutton = <button onClick={updateAccess}>Logout</button>
    // else Optionalbutton = <button onClick={updateAccess}>Login</button>

    if(access) Optionalbutton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    else Optionalbutton = <LoginButton loginAction={loginAction}></LoginButton>


    // Mensajes sin leer
    let addMessages = () => {
        setnMesagge(nMesagge + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            {Optionalbutton}

            {/* N Mesagges unread */}
            {access ? (
                <div> 
                { nMesagge > 1 &&  <p>You Have {nMesagge} new Mesagges...</p> }
                { nMesagge > 0 && nMesagge === 1 && <p>You Have {nMesagge} Mesagge...</p> }
                { nMesagge === 0 &&  <p>There are no new Mesagges</p> }
                <button onClick={addMessages}>Add new Mesagges</button>
                </div>
            ) : null}
        </div>
    );
}

export default OptionalRender;
