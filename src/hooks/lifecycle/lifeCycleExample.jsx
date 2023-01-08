/**
 * Ejemplo de componente de tipo clase que dispone de los metodos
 * de ciclo de vida.
 */

import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';




export class LifeCycleExample extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)')

    }

    render() {
        return (
            <div>
            <h1>Didmoount</h1>        
            </div>
        );
    }
}


export const LifeCycleExampleHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)')
    }, []);

    return (
        <div>
            <h1>Didmount</h1>   
        </div>
    );
}





