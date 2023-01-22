import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(

    {
        email: Yup.string()
        .email('Invalid Email format')
        .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const Navigate = useNavigate();



    return (
        <div>
            <h4>Login Formik</h4>
          <Formik 
            initialValues = { initialCredentials }
            validationSchema = { loginSchema }
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                // Guardar datos
                await localStorage.setItem('credentials', values)
                Navigate('/');
            }}>
                {/* We obtain props from formik */}
                {({ values, 
                    errors, 
                    touched, 
                    isSubmitting, 
                    handleChange, 
                    handleBlur}) => 
                    ( 
                        <Form className='d-flex flex-column gap-3'>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email"  type="email" placeholder="example@email.com" />
                                {/* Mensaje de error en email */}
                       
                                <ErrorMessage name='email' component='div'></ErrorMessage>

                       
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" placeholder="password" />
                                {/* Mensaje de error en password */}
                           
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                                  
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login in...</p>) : null}
                        </Form>

                    )
                }
               
          </Formik>
        </div>
    
    );
}

export default LoginFormik;
