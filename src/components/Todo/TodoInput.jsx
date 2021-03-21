import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addTodo } from '@features/Todo/todo.action';
import './TodoInput.css';


function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }
    const saveTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            item: input,
            done: false,
            id: nanoid()
        }))
        setInput('');
    }
    return (
        <form  className='input' onSubmit={saveTodo}>
            <input
                className="form-input"
                value={input}
                onChange={handleChangeInput}
                type='text'/>
            <button
                type="submit"
                className='btn'
                >
                    Add!
            </button>
        </form>
    )
}

export default Input
