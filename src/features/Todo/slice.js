import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    todoList: []
}

const totoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    item.done = !item.done;
                }
                return item;
            })
        },
    }
});

export const {
    saveTodo,
    setCheck
} = totoSlice.actions

export const selectTodoList = state => state.todos.todoList


export default totoSlice.reducer