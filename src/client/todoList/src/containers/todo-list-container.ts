import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';
import {bindable, inject} from 'aurelia-framework';
import { countTodos, editTodo, removeTodo, toggleTodo } from 'actions/index';

import { IState } from 'interfaces/index';
import { ITodosState } from 'interfaces/ITodosState';
import {Store} from 'redux';
import {reduxStore} from 'store';

@inject(reduxStore)
export class TodoListContainerCustomElement {
  
  @bindable
  todos:Array<ITaskBaseModel>;

  constructor(private store:Store<IState>) {
    this.store.subscribe(this.update.bind(this));
  }

  update() {
    this.todos = this.getVisibleTodos(this.store.getState().todoListReducer.todos,  this.store.getState().filterReducer.currentFilter);
    if (this.todos.length !== this.store.getState().todoListReducer.todosCounter) {
      this.store.dispatch(countTodos(this.todos));
    }
  }

  onTodoEdit(todo: ITaskBaseModel) {
    this.store.dispatch(editTodo(todo));
  }

  onTodoToggle(todo: ITaskBaseModel){
    this.store.dispatch(toggleTodo(todo));
  }

  onTodoDelete(todo: ITaskBaseModel) {
    this.store.dispatch(removeTodo(todo));
  }

  getVisibleTodos(todos: Array<ITaskBaseModel>, filter:IFilterBaseModel):Array<ITaskBaseModel> {
    if (filter) {
      switch (filter.name) {
        case 'all':
          return todos.slice(0);
        case 'active':
          return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
      }
    }
    return todos;
  }

}
