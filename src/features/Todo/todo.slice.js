import { createSlice } from '@reduxjs/toolkit'
import todoReducer from './todo.reducer';
import { FILTER_ENUMS } from './toto.enum';

export const initialState = {
    todoList: [],
    filter: FILTER_ENUMS.ALL
}

const totoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: todoReducer
});

export default totoSlice;
