import {HttpClient} from 'aurelia-http-client';
import { IAction } from 'interfaces/IAction';
import { ITaskBaseModel } from 'aurelia-todolist-models';

// todo list
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_LOADING = 'FETCH_TODOS_LOADING';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const REMOVE_TODO_LOADING = 'REMOVE_TODOS_LOADING';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODOS_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODOS_FAILURE';

export const ADD_TODO_LOADING = 'ADD_TODO_LOADING';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';


export const EDIT_TODO_LOADING = 'EDIT_TODO_LOADING';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'EDIT_TODO_FAILURE';


export const TOGGLE_TODO_LOADING = 'TOGGLE_TODO_LOADING';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';

export const CLEAR_COMPLETED_TODOS_LOADING = 'CLEAR_COMPLETED_TODOS_LOADING';
export const CLEAR_COMPLETED_TODOS_SUCCESS = 'CLEAR_COMPLETED_TODOS_SUCCESS';
export const CLEAR_COMPLETED_TODOS_FAILURE = 'CLEAR_COMPLETED_TODOS_FAILURE';

export const  COUNT_TODOS = 'COUNT_TODOS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:4000' : '/api';

const client = new HttpClient();

client.configure(x => {
  x.withHeader('Content-Type', 'application/json');
});
// todos fetch
function fetchTodosAsync() {
  return client.get( `${ROOT_URL}/tasks`);
}

function fetchTodosLoading():IAction<any> {
  return {
    type: FETCH_TODOS_LOADING,
    payload: null
  };
}

function fetchTodosSuccess(todos):IAction<Array<ITaskBaseModel>> {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  };
}

function fetchTodosFailure(error):IAction<any> {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error
  };
}

export function fetchTodos() {
  
  return function (dispatch) {
    
    dispatch(fetchTodosLoading());

    return fetchTodosAsync().then(
      todos =>  dispatch(fetchTodosSuccess(todos.content)),
      error => dispatch(fetchTodosFailure(error))
    );
  };
}

// todos count
export function countTodos(todos:Array<ITaskBaseModel>):IAction<number> {
  return {
    type: COUNT_TODOS,
    payload: todos.length
  }
}

//todos remove 
function removeTodoAsync(task:ITaskBaseModel) {
  return client.delete( `${ROOT_URL}/tasks/${task.id}`);
}

function removeTodoLoading():IAction<any> {
  return {
    type: REMOVE_TODO_LOADING,
    payload: null
  };
}

function removeTodoSuccess(todo):IAction<ITaskBaseModel> {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: todo
  };
}

function removeTodoFailure(error):IAction<any> {
  return {
    type: REMOVE_TODO_FAILURE,
    payload: error
  };
}

export function removeTodo(task:ITaskBaseModel) {
  
  return function (dispatch) {
    
    dispatch(removeTodoLoading());

    return removeTodoAsync(task).then(
      todo =>  dispatch(removeTodoSuccess(todo.content)),
      error => dispatch(removeTodoFailure(error))
    );
  };
}

//todos ADD 
function addTodoAsync(task:ITaskBaseModel) {
  return client.post( `${ROOT_URL}/tasks`, task);
}

function addTodoLoading():IAction<any> {
  return {
    type: ADD_TODO_LOADING,
    payload: null
  };
}

function addTodoSuccess(todo):IAction<ITaskBaseModel> {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo
  };
}

function addTodoFailure(error):IAction<any> {
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  };
}

export function addTodo(task:ITaskBaseModel) {
  
  return function (dispatch) {
    
    dispatch(addTodoLoading());

    return addTodoAsync(task).then(
      todo =>  dispatch(addTodoSuccess(todo.content)),
      error => dispatch(addTodoFailure(error))
    );
  };
}

//todos edit 
function editTodoAsync(task:ITaskBaseModel) {
  return client.put( `${ROOT_URL}/tasks/${task.id}`, task);
}

function editTodoLoading():IAction<any> {
  return {
    type: EDIT_TODO_LOADING,
    payload: null
  };
}

function editTodoSuccess(todo):IAction<ITaskBaseModel> {
  return {
    type: EDIT_TODO_SUCCESS,
    payload: todo
  };
}

function editTodoFailure(error):IAction<any> {
  return {
    type: EDIT_TODO_FAILURE,
    payload: error
  };
}

export function editTodo(task:ITaskBaseModel) {
  
  return function (dispatch) {
    
    dispatch(editTodoLoading());

    return editTodoAsync(task).then(
      todo =>  dispatch(editTodoSuccess(todo.content)),
      error => dispatch(editTodoFailure(error))
    );
  };
}

//todos toggle
function toggleTodoAsync(task:ITaskBaseModel) {
  return client.put( `${ROOT_URL}/tasks/${task.id}`, task);
}

function toggleTodoLoading():IAction<any> {
  return {
    type: TOGGLE_TODO_LOADING,
    payload: null
  };
}

function toggleTodoSuccess(todo):IAction<ITaskBaseModel> {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: todo
  };
}

function toggleTodoFailure(error):IAction<any> {
  return {
    type:TOGGLE_TODO_FAILURE,
    payload: error
  };
}

export function toggleTodo(task:ITaskBaseModel) {
  
  return function (dispatch) {
    
    dispatch(toggleTodoLoading());

    return toggleTodoAsync(task).then(
      todo =>  dispatch(toggleTodoSuccess(todo.content)),
      error => dispatch(toggleTodoFailure(error))
    );
  };
}

//todos clear completed
function clearCompletedTodoAsync(tasks: Array<ITaskBaseModel>) {
  return client.post( `${ROOT_URL}/tasks/delete/completed`, tasks);
}

function clearCompletedTodosLoading():IAction<any> {
  return {
    type: CLEAR_COMPLETED_TODOS_LOADING,
    payload: null
  };
}

function clearCompletedTodosSuccess(todos):IAction<Array<ITaskBaseModel>> {
  return {
    type: CLEAR_COMPLETED_TODOS_SUCCESS,
    payload: todos
  };
}

function clearCompletedTodosFailure(error):IAction<any> {
  return {
    type: CLEAR_COMPLETED_TODOS_FAILURE,
    payload: error
  };
}

export function clearCompletedTodo(tasks:Array<ITaskBaseModel>) {
  
  return function (dispatch) {
    
    dispatch(toggleTodoLoading());

    return clearCompletedTodoAsync(tasks).then(
      todos =>  dispatch(clearCompletedTodosSuccess(todos.content)),
      error => dispatch(clearCompletedTodosFailure(error))
    );
  };
}
