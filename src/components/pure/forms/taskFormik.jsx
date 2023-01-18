import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { LEVELS } from '../../../models/levels.enum';
import * as Yup from 'yup'
import { Task } from '../../../models/task.class';


const TaskFormik = () => {

    const initialValues = new Task('', '', false,  LEVELS.normal);

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().min(2, 'Too Short')
                .max(30, 'Too Long')
                .required('Task name is required'),

            description: Yup.string().min(2,'Need a better Description')
                .required('Description required'),
            
            level: Yup.string()
                .oneOf([LEVELS.normal, LEVELS.urgent, LEVELS.blocking], 'You must select a priority')
                .required('Priority is required')
        }
    )
    return (
        <div>
            <Formik 
            initialValues={initialValues}
            enableReinitialize='true'
            validationSchema={taskSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
            {({ values, 
                errors, 
                isSubmitting}) => (
                    <Form className='d-flex flex-column gap-3'>
                            <label htmlFor="name">Task name</label>
                            <Field id="name" name="name"  type="text" placeholder="Your taskName" />
                                {/* Mensaje de error en taskName */}
                                <ErrorMessage name='name' component='div'></ErrorMessage>

                            <label htmlFor="description">Description</label>
                            <Field id="description" name="description"  type="description" placeholder="example@example.com"/>
                                {/* Mensaje de error en description */}
                                <ErrorMessage name='description' component='div'></ErrorMessage>

                            <label htmlFor="level">Select Priority</label>
                            <Field component="select" name="level" id="level" className="form-select">
                                <option defaultValue={LEVELS.normal}>Normal</option>
                                <option value={LEVELS.urgent}>Urgent</option>
                                <option value={LEVELS.blocking}>Blocking</option>
                            </Field>

                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Submiting Task</p>) : null}
                        </Form>
                )
            }

            </Formik>
            
        </div>
    );
}

export default TaskFormik;
