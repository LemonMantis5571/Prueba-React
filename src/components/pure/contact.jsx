import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h2>Apellido: {contact.apellido}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Conectado: {contact.conectado  ? 'Contacto En Linea' : 'Contacto No Disponible'}</h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
