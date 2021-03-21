import {
    addTodo,
    deleteTodo,
    filterTodo,
    checkTodo
} from '@features/Todo/todo.action';

export const FILTER_ENUMS = {
    ALL: 'ALL',
    DONE: true,
    UNDONE: false
}


const todoReducer = {
    [addTodo] : (state, action) => {
        state.todoList.push(action.payload)
    },
    [checkTodo]: (state, action) => {
        state.todoList.map(item => {
            if (action.payload === item.id) {
                item.done = !item.done;
            }
            return item;
        })
    },
    [filterTodo]: (state, action) => {
        return {
            ...state,
            filter: action.payload
        }
    },
    [deleteTodo]: (state, action) => {
        return state;
    }


}
export default todoReducer;
