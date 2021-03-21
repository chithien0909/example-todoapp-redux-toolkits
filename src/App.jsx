import React from 'react';
import './App.css';
import TodoInput from '@components/TodoInput';
import TodoList from '@components/TodoList';
import TodoFilter from '@components/TodoFilter';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          <TodoList />
        </div> 
        <TodoFilter />
        <TodoInput />
      </div> 
    </div>
  );
}

export default App;
