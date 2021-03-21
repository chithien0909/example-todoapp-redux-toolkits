import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { filterTodo, FILTER_ENUMS, setFilter } from '@features/Todo/todo.slice';
import './TodoFilter.css'


const TodoFilter = () => {
    const filter = useSelector(filterTodo);
    const dispatch = useDispatch()
    const handleChangeFilter = (value) => () => {
        console.log(filter)
        dispatch(setFilter(value))
    }
    return (
        <div>
            <button className={`btn btn-all ${filter === FILTER_ENUMS.ALL ? 'disable' : ''}`} onClick={handleChangeFilter(FILTER_ENUMS.ALL)} disabled={filter === FILTER_ENUMS.ALL}>All</button>
            <button className={`btn btn-done ${filter === FILTER_ENUMS.DONE ? 'disable' : ''}`} onClick={handleChangeFilter(FILTER_ENUMS.DONE)} disabled={filter === FILTER_ENUMS.DONE}>Done</button>
            <button className={`btn btn-undone ${filter === FILTER_ENUMS.UNDONE ? 'disable' : ''}`} onClick={handleChangeFilter(FILTER_ENUMS.UNDONE)} disabled={filter === FILTER_ENUMS.UNDONE}>Undone</button>
        </div>
    )
}


export default TodoFilter
