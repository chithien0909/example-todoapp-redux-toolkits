import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@features/Todo/todo.slice';

export default configureStore({
  reducer: {
    todos: todoReducer
  },
});
