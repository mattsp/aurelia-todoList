import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';

type ITodos = {
  todos: Array<ITaskBaseModel>,
  isLoading: false,
  hasError: null
}

export interface ITodosState {
  todos: Array<ITaskBaseModel>,
  todosCounter: number;
  isLoading: false,
  hasError: null
}
