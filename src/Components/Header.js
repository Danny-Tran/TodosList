import React from 'react';


// header component that will display how many task currently avaiable
// passing props from state of APP component 
const Header = (props) => {
    return (
        <div className='card-header'>
            <h1 className='card-header-title header'>
                You have {props.numTodos} Todos
            </h1>            
        </div>
    );
};

export default Header;