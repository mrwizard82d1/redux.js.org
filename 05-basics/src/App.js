import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './containers/AddToDo';
import VisibleToDoList from './containers/VisibleToDoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <AddToDo />
          <VisibleToDoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
