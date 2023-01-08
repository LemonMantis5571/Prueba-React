/* Ejemplo de uso del Hook useState 
Crear un componente tipo funcion y acceder a su estado privado a traves
de un hook y ademas, poder modificarlo.
*/

import React, { useState} from 'react';

const Ejemplo1 = () => {

    // Valor Inicial
    const valorInicial = 0;

    //Valor inicial para una persona
    const valorInicialPersona = {
        nombre : 'Leonel',
        email: 'briter456@gmail.com'
    }

    /* Queremos que el valor inicial y persona incial sean parte
    del estado del componente para asi poder gestionar su cambio
    y que este se vea reflejado en la vista del componente
    *
    * const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
    */
    
    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(valorInicialPersona);

    /* Funcion para actualizar el estado privado que contiene el contador*/ 

    function incrementarContador(){
        setcontador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setpersona(
            {
                nombre: 'LemonMantis',
                email: 'ldx306120@gmail.com'
            }
        )
    }

    return (
        <div>
        <h1>*** Ejemplo  de useState() ***</h1>
        <h2>contador: {contador}</h2>
        <h2>Datos persona:</h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h4>email: {persona.email}</h4>

        {/* Bloque de Botones para actualizar el estado */}
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;

