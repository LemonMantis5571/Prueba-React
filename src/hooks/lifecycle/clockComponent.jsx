import React, {useEffect, useState} from 'react';

const ClockComponent = () => {

    const initialClock = {
        fecha: new Date().getHours(),
        edad: 0,
        nombre: 'Leonel',
        apellido: 'Guerrero'
    }
    
   

    const [edad, setedad] = useState(initialClock.edad);

  

    useEffect(() => {

        const aumentarEdad = () => {
            setedad(edad + 1);
        }
        
        const intervalID = setInterval(() => {
            aumentarEdad();
        }, 1000)


        return () => {
            clearInterval(intervalID);
        };

    }, [edad]);

    
  


    return (
        <div>
        <h1> Nombre:  {initialClock.nombre} {initialClock.apellido}</h1>
        <h2> Hora actual: {initialClock.fecha}</h2>
        <h1> edad: {edad}</h1> 
        </div>
    );
}

export default ClockComponent;
