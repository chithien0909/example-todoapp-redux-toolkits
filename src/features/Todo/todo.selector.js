import {FILTER_ENUMS} from './toto.enum';

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
export const selectFilterTodo = state => state.todos.filter;
