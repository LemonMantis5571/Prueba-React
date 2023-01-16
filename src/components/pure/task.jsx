import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Task Created')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.normal:
                return(<h6 className='mb-0'>
                <span className='badge bg-primary'>{task.level}</span>

                </h6>)
            case LEVELS.urgent:
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)

            case LEVELS.blocking:
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)
            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if(task.completed) {
            
            return  <i onClick={() => complete(task)} className='bi bi-check-circle' style={{color: 'green', fontSize: 'larger'}}></i>;
        }

        return <i onClick={() => complete(task)} className='bi bi-x-square' style={{color: 'grey'}}></i>;
    }

    const completedStyle = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const pendingStyle = {
        fontWeight: 'bold',
        color: 'red'
    }

    return (
        
        <tr className='fw-normal' style={task.completed ? completedStyle : pendingStyle}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>

            <td className='align-middle'>
                <span>{taskCompletedIcon()}</span>
                <i onClick={() => remove(task)} className='bi-trash' style={{color: 'tomato', fontSize: 'larger'}}></i>
            </td>

        </tr>

        // <div>
        //     <h2 className='task-name'>Nombre: { task.name }</h2>
        //     <h3>Descripción: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>This task is: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}; 


export default TaskComponent;
