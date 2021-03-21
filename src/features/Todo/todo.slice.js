import { createSlice } from '@reduxjs/toolkit'
export const FILTER_ENUMS = {
    ALL: 'ALL',
    DONE: true,
    UNDONE: false
}
export const initialState = {
    todoList: [],
    filter: FILTER_ENUMS.ALL
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
        setFilter: (state, action) => {
            console.log(action)
            return {
                ...state,
                filter: action.payload
            }
        }
    }
});

export const {
    saveTodo,
    setCheck,
    setFilter
} = totoSlice.actions

export const selectTodoList = state => {
    switch (state.todos.filter) {
        case FILTER_ENUMS.ALL:
            return state.todos.todoList;
        case FILTER_ENUMS.DONE:
            return state.todos.todoList.filter(item => item.done === FILTER_ENUMS.DONE);
        case FILTER_ENUMS.UNDONE:
            return state.todos.todoList.filter(item => item.done === FILTER_ENUMS.UNDONE);
        default:
            return state.todos.todos
    }
}
export const filterTodo = state => state.todos.filter;

export default totoSlice.reducer