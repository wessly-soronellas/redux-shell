// SELECTORS ARE MEANT TO ABSTRACT AWAY HOW DATA IS STORED IN REDUX
// AS WELL AS GIVE US A PLACE TO PUT LOGIC FOR TRANSFORMING REDUX DATA
// INTO DATA THAT OUR COMPONENTS CAN USE.
import { createSelector } from 'reselect';
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);