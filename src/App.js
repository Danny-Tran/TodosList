import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tasks: ['task 1','task 2','task 3']
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Todos Apps</div>
        </header>
    </div>
    );
  }
}

export default App;