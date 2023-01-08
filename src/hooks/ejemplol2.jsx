/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplol2 = () => {

    // Vamos a crear dos contadores distintos
    // Cada uno en un estado diferente

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);


    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente(Vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setcontador1(contador1 + 1);
    }

    function incrementar2() {
        setcontador2(contador2 + 1);

    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1: Ejecutar Siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando Referencia a elemento del DOM:')
    //     console.log(miRef);
    // });


    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador1
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga
     * el useEffect()
     * En caso de que cambie contador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del contador1');
    //     console.log('Mostrando Referencia a elemento del DOM:')
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga
     * el useEffect()
     * En caso de que cambie contador2, se ejeccuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('Cambio en el estado del Contador1/Contador2');
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef);
    },[contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo  de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de Elemento referenciado
            </h4>
            {/* Botones para cambiar contadores */}

            <button onClick={incrementar1}>Incrementar contador1</button>
            <button onClick={incrementar2}>Incrementar contador2</button>
        </div>
    );
}

export default Ejemplol2;
