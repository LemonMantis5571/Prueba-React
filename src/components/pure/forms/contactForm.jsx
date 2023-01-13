import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contact.class';
const ContactForm = ({add}) => {
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');
    // const conectadoRef = useRef(false);

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contacto(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            true
        );
        add(newContact);
    }

    return (
        <div>
            <form onSubmit={addContact} className='d-flex flex-column justify-content-center align-items-center mt-3 gap-2'>
                <div className='mb-4 gap-3'>
                    <label for='fullNameInput' className='form-label'>Full Name</label>
                    <div className='d-flex gap-3'>
                        <input ref={nameRef} type='text' className='form-control' id='fullNameInput' placeholder='Name'></input>
                        <input ref={surnameRef} type='text' className='form-control' id='FullNameInput' placeholder='Surname'></input>
                    </div>
                    
                    <div>
                        <label for='fullNameInput' className='form-label'>Email</label>
                        <input  ref={emailRef} type='text' className='form-control' id='fullNameInput' placeholder='Email'></input>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary btn-lg'>Add Contact</button>
            </form>
        </div>
        
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
