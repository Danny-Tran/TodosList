import React from 'react';

const Task = (props) => {
    return (
        <div className='list-item'>
            {props.content}
            <button class="delete is-pulled-right"></button>
        </div>
    );
};

export default Task;