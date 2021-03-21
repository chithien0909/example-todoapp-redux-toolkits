import React, { memo } from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { checkTodo, deleteTodo } from '@features/Todo/todo.action';
import './TodoItem.css'
import { DeleteOutline } from '@material-ui/icons';


const areEqual = (prevProps, nextProps) => {
  console.log(prevProps);
  console.log(nextProps);
  return prevProps.todo.id === nextProps.todo.id && prevProps.todo.done === nextProps.todo.done
}

const TodoItem = memo(({todo}) => {
  const { id, item: name, done } = todo;
  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(checkTodo(id))
  }
  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
      <p className={done ? 'todoItem--done' : 'todoItem--undone'}>{name}</p>
      <DeleteOutline
        onClick={handleDelete}
        style={{cursor: 'pointer'}}
        color="error"
        fontSize='small'/>
    </div>
  )
}, areEqual)

export default TodoItem;
