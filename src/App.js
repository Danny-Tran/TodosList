import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Header.js'

class App extends Component {
  state = {
    tasks: ['task 1','task 2','task 3']
  };
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className='card frame'>
            <Header numTodos={this.state.tasks.length}/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;