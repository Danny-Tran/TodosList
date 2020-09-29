import React from 'react';
import Task from '../Components/Task';

// creating a todoList that will display every single task in the state
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