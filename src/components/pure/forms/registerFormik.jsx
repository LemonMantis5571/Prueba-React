import React from 'react';
import { User } from '../../../models/user.class';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum';



const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    };

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string().min(2, 'Too Short!')
                    .max(30, 'Too Long!')
                    .required('Required'),

            email: Yup.string()
                    .email('Invalid email')
                    .required('Required'),

            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a ROLE')
                .required('Role is required'),

            password: Yup.string()
                    .min(8, 'Password too short')
                    .required('Required'),

            confirm: Yup.string().when('password', {
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf([Yup.ref("password")], 
                        'Password must match!')
                    }).required('You must confirm the password')
        }
    );


    const submit = (values) => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
            {({ values, 
                    errors, 
                    touched, 
                    isSubmitting, 
                    handleChange, 
                    handleBlur}) => (
                        <Form className='d-flex flex-column gap-3'>
                            <label htmlFor="username">Username</label>
                            <Field id="username" name="username"  type="text" placeholder="Your username" />
                                {/* Mensaje de error en username */}
                                <ErrorMessage name='username' component='div'></ErrorMessage>

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email"  type="email" placeholder="example@example.com"/>
                                {/* Mensaje de error en email */}
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" placeholder="password" />
                                {/* Mensaje de error en password */}
                           
                                <ErrorMessage name='password' component='div'></ErrorMessage>

                            <label htmlFor="confirm">Confirm Password</label>
                            <Field id="confirm" name="confirm" type="password" placeholder="confirm password" />
                                {/* Mensaje de error en confirm password */}
                           
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Signing in...</p>) : null}
                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}

export default RegisterFormik;
