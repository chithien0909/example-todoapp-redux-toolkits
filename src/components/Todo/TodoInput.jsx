import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
            id: Date.now()
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
