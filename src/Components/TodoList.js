import React from 'react';

const TodoList = (props) => {
    const tasks = props.tasks.map((task, index)=> {
        return <Task content={task} key={index} id={index}/>
    })

    return (
        <div className='list-wrapper'>
            Hello I am Tasks
        </div>
    );
};

export default TodoList;