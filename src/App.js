import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './component/todo.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todo />
      </div>
    );
  }
}

export default App;
