import {
  ADD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  COUNT_TODOS,
  EDIT_TODO_FAILURE,
  EDIT_TODO_LOADING,
  EDIT_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO_FAILURE,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS
} from 'actions/index';
import { ADD_TODO_LOADING, CLEAR_COMPLETED_TODOS_FAILURE, CLEAR_COMPLETED_TODOS_LOADING, CLEAR_COMPLETED_TODOS_SUCCESS } from './../actions/todosAction';
import { IAction, ITodosState } from 'interfaces/index';
import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';

const INITAL_STATE:ITodosState = {
    todos: new Array<ITaskBaseModel>(),
    todosCounter: 0,
    isLoading: false,
    hasError: null
}

export default function todoListReducer(state:ITodosState = INITAL_STATE, action:IAction<any>): any {
  switch(action.type) {
    case CLEAR_COMPLETED_TODOS_LOADING:
    case TOGGLE_TODO_LOADING:
    case ADD_TODO_LOADING:
    case REMOVE_TODO_LOADING:
    case FETCH_TODOS_LOADING:
      return Object.assign({}, state, { isLoading: true })
    case ADD_TODO_SUCCESS:
      return Object.assign({}, state, {todos: state.todos.concat([(action.payload as ITaskBaseModel)])});
    case REMOVE_TODO_SUCCESS:
      const todoId = (action.payload as ITaskBaseModel).id;
      return Object.assign({}, state, {isLoading: false, todos: state.todos.filter(todo => todo.id !== todoId), hasError: false } )
    case FETCH_TODOS_SUCCESS:
      const todos = action.payload;
      return Object.assign({}, state, { isLoading: false, todos, hasError: false })
    case EDIT_TODO_SUCCESS:
        return Object.assign({}, state, {
          todos : state.todos.map(todo => {
              if (todo.id !== (action.payload as ITaskBaseModel).id) {
                return todo;
              }

              return Object.assign({}, todo, {
                  title : (action.payload as ITaskBaseModel).title
              })
            })
      });
    case TOGGLE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos : state.todos.map(todo => {
            if (todo.id !== (action.payload as ITaskBaseModel).id) {
              return todo;
            }

            return Object.assign({}, todo, {
                completed : !todo.completed
            })
          })
      });
    case CLEAR_COMPLETED_TODOS_SUCCESS:
      return Object.assign({}, state, {isLoading: false, todos: state.todos.filter(todo => todo.completed !== true), hasError: false } );
    case CLEAR_COMPLETED_TODOS_FAILURE:
    case TOGGLE_TODO_FAILURE:
    case ADD_TODO_FAILURE:
    case REMOVE_TODO_FAILURE:
    case FETCH_TODOS_FAILURE:
      return Object.assign({}, state, { isLoading: false, hasError: true })
    case COUNT_TODOS: 
      const todosCounter = action.payload;
      return Object.assign({}, state, { isLoading: false, todosCounter, hasError: false })
    default:
      return state;
  }
}
