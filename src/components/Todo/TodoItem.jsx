import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { checkTodo } from '@features/Todo/todo.action';
import './TodoItem.css'


function TodoItem({todo}) {
    const { id, item: name, done } = todo;
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(checkTodo(id))
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
        </div>
    )
}

export default TodoItem;
