import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Mi primera Tarea', 'Default description.', false, LEVELS.normal);

    return (
        <div>
            <div>
               <h1> Your Tasks: </h1>
            </div>
            {/* Todo Aplicar un for / Map para renderizar una lista */}
           <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};





export default TaskListComponent;
