import React, { Component } from 'react';

class SubmitForm extends Component {
    render() {
        return (
            <form>
                <input
                    type='text'
                    className= 'input'
                    placeholder= 'enter task'
                />
                <button className='button'>Submit</button>
            </form>
        );
    }
}

export default SubmitForm;