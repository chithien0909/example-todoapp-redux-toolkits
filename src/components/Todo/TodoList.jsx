import React from 'react'
import { useSelector } from 'react-redux';

import { selectTodoList } from '@features/Todo/todo.selector';
import TodoItem from '@components/Todo/TodoItem';

const TodoList = function TodoList() {
    const todoList = useSelector(selectTodoList)
    return (
        <div style={{width: '100%'}}>
            {
                todoList.map(item => <TodoItem key={item.id} todo={item} /> )
            }
        </div>
    )
};

export default TodoList
