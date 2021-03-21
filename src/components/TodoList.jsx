import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { selectTodoList } from '@features/Todo/todo.slice';

import TodoItem from '@components/TodoItem';

const TodoList = memo(function TodoList() {
    
    const todoList = useSelector(selectTodoList)
    return (
        <div style={{width: '100%'}}>
            {
                todoList.map(item => <TodoItem key={item.id} todo={item} /> )
            }
        </div>
    )
})

export default TodoList
