import React, { Component }  from 'react';
// import { Route, Switch } from 'react-router-dom';
import Todo from './containers/Todo/Todo'

class App extends Component {
  render() {
    return (
      <div>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
