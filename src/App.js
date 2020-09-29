import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import TodoList from '../src/Components/TodoList';
import SubmitForm from '../src/Components/SubmitForm'


// break the app into 3 seperate component,
// first create a header
  // this component consist of 
class App extends Component {
  state = {
    tasks: ['task 1','task 2','task 3']
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index,1);
    this.setState({tasks:newArr});
  }

  handleSubmit = (task) => {
    this.setState({tasks: [...this.state.tasks,task]})
  }
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className='card frame'>
            {/* create numTodo to cal the number of open task */}
            <Header numTodos={this.state.tasks.length}/>
            {/* passing Tasks state from above to TodoList as a props to display tasks */}
            {/* Passing onDelete function to todoList component to handle delete */}
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
            <SubmitForm onFormSubmit={this.handleSubmit}/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;