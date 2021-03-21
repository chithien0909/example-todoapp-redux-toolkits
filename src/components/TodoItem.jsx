import React from 'react';
import { Checkbox } from '@material-ui/core';
import './TodoItem.css'
import { useDispatch } from 'react-redux';
import  { setCheck } from '../features/Todo/slice'
function TodoItem({todo}) {
    const { id, item: name, done } = todo;
    console.log(id)
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
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