import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {

        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualización del componente');
        }, 1000)

        return () => {
            document.title = "Tiempo detenido"; 
            console.log('Componente va a desaparecer');
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
