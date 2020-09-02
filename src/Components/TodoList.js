import React from 'react';
import Task from '../Components/Task';

const TodoList = (props) => {
    const tasks = props.tasks.map((task, index)=> {
        return <Task content={task} key={index} id={index} onDelete={props.onDelete}/>
    })

    return (
        <div className='list-wrapper'>
            {tasks}
        </div>
    );
};

export default TodoList;