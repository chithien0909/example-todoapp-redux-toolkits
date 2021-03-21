import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import  { saveTodo } from '@features/Todo/todo.slice'

function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }
    const addTodo = (e) => {
        e.preventDefault();
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        setInput('');
    }
    return (
        <form  className='input' onSubmit={addTodo}>
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
