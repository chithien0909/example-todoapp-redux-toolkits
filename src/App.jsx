import React from 'react';
import './App.css';
import Input from '@components/Input';
import TodoItem from '@components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from '@features/Todo/slice';

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          <div style={{width: '100%'}}>
            
          {
            todoList.map(item => <TodoItem key={item.id} todo={item} /> )
          }
          </div>
        </div> 
        <Input />
      </div> 
    </div>
  );
}

export default App;
