import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1.', true, LEVELS.normal);
    const defaultTask2= new Task('Example2', 'Description2.', false, LEVELS.urgent);
    const defaultTask3 = new Task('Example3', 'Description3.', false, LEVELS.blocking);

    //Estado del componente

    const [tasks, settasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const [loading, setLoading] = useState(true);


    //Control del ciclo de vida del componente

    useEffect(() => {
        
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            
        };
    }, [tasks]);


    function completeTask(task) {

        const index = tasks.indexOf(task);
        const tempTask = [...tasks];

        tempTask[index].completed = !tempTask[index].completed;
        settasks(tempTask); 
        console.log(tempTask);
    }

    function deleteTask(task) {
        console.log('Delete this Task', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        settasks(tempTask);
    }

    function addTask(task) {
        console.log('Add this Task', task);
        const tempTask = [...tasks];
        tempTask.push(task)
        settasks(tempTask);

    }

    const Table = () => {

        return (
            <table>
                <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}

                {tasks.map((task, index) => {
                        return (
                        <TaskComponent key={index} 
                        task={task} 
                        complete={completeTask} 
                        remove={deleteTask}></TaskComponent>
                        );
                    }
                )}
            
                </tbody>
            </table>

        )
    }

    const Spinner = () => {
        return (
            <div className='spinner-border mt-5' role="status">
                <span className='visually-hidden'>Loading...</span>
            </div>
        )
    }

    let tasksTable;
    let spinnerLoader = <Spinner></Spinner>

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    }
    else {
        tasksTable = (
            <div>
                <h4>Theres no tasks yet</h4>
                <h5>Please Create one</h5>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                        Your Tasks:
                        </h5>
                    </div>
                </div>
                <div className='card-body cuerpo-1 text-center' data-mdb-perfect-scrollbar="true">
                    {loading ? spinnerLoader : tasksTable}
                </div>
                <TaskForm add={addTask} length={tasks.length}></TaskForm>
            </div>
           
        </div>
    );
};





export default TaskListComponent;
