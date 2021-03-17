import React from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Todo Stream</Typography>
        <hr />
        <p>This is the form area</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
