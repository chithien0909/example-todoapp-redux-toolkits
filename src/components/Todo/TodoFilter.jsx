import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FILTER_ENUMS } from '@features/Todo/toto.enum';
import { selectFilterTodo } from '@features/Todo/todo.selector';
import { filterTodo } from '@features/Todo/todo.action';
import './TodoFilter.css'

const TodoFilter = memo(() => {
  const filter = useSelector(selectFilterTodo);
  const dispatch = useDispatch()
  const handleChangeFilter = (status) => () => {
    dispatch(filterTodo(status))
  }
  return (
    <div>
      <button
        className={`btn btn-all ${filter === FILTER_ENUMS.ALL ? 'disable' : ''}`}
        onClick={handleChangeFilter(FILTER_ENUMS.ALL)} disabled={filter === FILTER_ENUMS.ALL}>All</button>
      <button
        className={`btn btn-done ${filter === FILTER_ENUMS.DONE ? 'disable' : ''}`}
        onClick={handleChangeFilter(FILTER_ENUMS.DONE)} disabled={filter === FILTER_ENUMS.DONE}>Done</button>
      <button
        className={`btn btn-undone ${filter === FILTER_ENUMS.UNDONE ? 'disable' : ''}`}
        onClick={handleChangeFilter(FILTER_ENUMS.UNDONE)} disabled={filter === FILTER_ENUMS.UNDONE}>Undone</button>
    </div>
  )
})


export default TodoFilter
