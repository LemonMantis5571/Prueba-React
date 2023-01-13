import React, {useState} from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {

    const defaultContact1 = new Contacto('Leonel', 'Guerrero', 'briter456@gmail.com', true);
    const defaultContact2= new Contacto('Martin', 'Loaisiga', 'turcanegra@gmail.com', false);
    const defaultContact3 = new Contacto('Yamileth', 'Velasquez', 'briter456@gmail.com', true);


    const [contacts, setcontacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacto = [...contacts];
        tempContacto.splice(index, 1);
        setcontacts(tempContacto);
    }

    function onlineContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacto = [...contacts];

        tempContacto[index].conectado = !tempContacto[index].conectado;
        setcontacts(tempContacto);
    }

    function addContact(contact) {
        const tempContacto = [...contacts];
        tempContacto.push(contact);
        setcontacts(tempContacto);
    }

    return (
        <div>
            <div className='mb-4'>
                <h1> Contacts </h1>
                {contacts.map((contact, index) => {
                    return ( <ContactComponent key={index} 
                    contact={contact}
                    remove={deleteContact}
                    online={onlineContact}> 
                    </ContactComponent>
                    );
                }
            )}
            </div>
           
            <div>
                <ContactForm add={addContact}></ContactForm>
            </div>
            
        </div>
    );
};




export default ContactListComponent;
