import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import TodoList from '../src/Components/TodoList';
import SubmitForm from '../src/Components/SubmitForm'

class App extends Component {
  state = {
    tasks: ['task 1','task 2','task 3']
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index,1);
    this.setState({tasks:newArr});
  }
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className='card frame'>
            <Header numTodos={this.state.tasks.length}/>
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
            <SubmitForm/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;