import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todo/ADD_TODO');
export const deleteTodo = createAction('todo/DELETE_TODO');
export const filterTodo = createAction('todo/FILTER_TODO');
export const checkTodo = createAction('todo/CHECK_TODO');

