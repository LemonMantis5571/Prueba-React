import React from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contacto('Leonel', 'Guerrero', 'briter456@gmail.com', true);
    return (
        <div>
            <div>
                <h1> Tus contactos: </h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};




export default ContactListComponent;
