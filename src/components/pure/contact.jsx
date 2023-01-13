import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';

const ContactComponent = ({contact, remove, online}) => {

    function onlineContact () {
        if (contact.conectado) {
           return <i onClick={() => online(contact)} className="bi bi-lightbulb-fill" style={{color: 'green'}}></i>
        }

        return <i onClick={() => online(contact)} className="bi bi-lightbulb-fill" style={{color: 'gray'}}></i>
    }   
    
    return (
        <div className='list-group mb-3'>
            <span className='list-group-item list-group-item-action ' aria-current='true'>
                <div className='d-flex w-100 justify-content-between gap-2'>
                    <h5 className='mb-1 fs-5'>{contact.nombre} {contact.apellido} </h5>
                    <small>Status: {onlineContact()}</small>
                </div>
                <p className='mb-1'>{contact.email}</p>
                <small><i onClick={() => remove(contact)} className='bi-trash' style={{cursor: 'pointer'}}></i></small>
            </span>
        </div>           
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto),
    remove:  PropTypes.func.isRequired
};


export default ContactComponent;
