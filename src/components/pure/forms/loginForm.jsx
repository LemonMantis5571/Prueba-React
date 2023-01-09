/**Componenete que va a contener un formulario para
 * autenticación de usuarios
 */


import React, {useState} from 'react';

const LoginForm = () => {

    const userCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setcredentials] = useState(userCredentials);

    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
