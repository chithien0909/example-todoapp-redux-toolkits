import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '@features/Todo/todo.slice';

export default configureStore({
  reducer: {
    todos: todoSlice.reducer
  },
});
