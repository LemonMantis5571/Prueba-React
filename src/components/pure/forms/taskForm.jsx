import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.normal);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
       <form onSubmit={addTask} className='d-flex flex-column justify-content-center align-items-center mt-3 gap-2'>
            <div className='d-flex flex-column form-outline flex-fill gap-2'>
                <input ref={nameRef} id='inputName' type={'text'} className='form-control form-control-lg' required autoFocus placeholder='Name'></input>
                <input ref={descriptionRef} id='inputDescription' type={'text'} className='form-control form-control-lg' required placeholder='Description'></input>
               <label htmlFor='selectLevel' className='sr-only'>Priority</label>
               <select ref={levelRef} id='selectLevel' defaultValue={LEVELS.normal}>
                    <option value={LEVELS.normal}>
                        Normal
                    </option>
                    <option value={LEVELS.urgent}>
                        Urgent
                    </option>
                    <option value={LEVELS.blocking}>
                        Blocking
                    </option>
               </select>
            </div>
            <button type='submit' className='btn btn-primary btn-lg'>Add Task</button>
       </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}


export default TaskForm;
