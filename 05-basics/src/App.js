import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import * as reducers from './reducers';

console.groupCollapsed('actions');
console.log('addToDo');
console.log(actions.addToDo('An action to do'));
console.log('toggleToDo');
console.log(actions.toggleToDo(3));
console.log('setVisibilityFilter');
console.log(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_ACTIVE));
console.groupEnd();

console.groupCollapsed('reducers');
console.log('initial state');
console.log(reducers.initialState);
console.groupEnd();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
