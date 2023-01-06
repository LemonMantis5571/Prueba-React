import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // const [variable, metodo para actualizarlo] = useState(valorinicial);

    const [age, setage] = useState(29);

    const birthday = () =>{
        setage(age + 1);

    };

    return (
        <div>
              <h1>
                    Hola {props.name} desde componente Funcional
                </h1>
                <h2>
                    Tu edad es de: {age}
                </h2> 
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
