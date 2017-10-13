import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';
import {bindable, bindingMode, inject} from 'aurelia-framework';
import { clearCompletedTodo, countTodos, setFilter } from 'actions/index';

import { IState } from 'interfaces/index';
import {Store} from 'redux';
import {reduxStore} from 'store';

@inject(reduxStore)
export class TodoFooterContainerCustomElement {
  
  @bindable
  todosCounter:number;
  @bindable
  todosItemName:string;
  @bindable
  todosItemPosition:string;
  @bindable
  filters:Array<IFilterBaseModel>;
  @bindable
  currentFilter:IFilterBaseModel;
  @bindable
  displayClearCompletedTodos:boolean;

  constructor(private store:Store<IState>) {
    this.store.subscribe(this.update.bind(this));
  }

  update() {
    this.todosCounter = this.store.getState().todoListReducer.todosCounter;
    this.filters = this.store.getState().filterReducer.filters;
    this.currentFilter =   this.store.getState().filterReducer.currentFilter || this.filters[0];
    this.displayClearCompletedTodos = this.hasTodosCompleted();
  }

  onFilterChange(id) {
    const filters = this.store.getState().filterReducer.filters;
    const filter = filters.find((filter)=>{ return filter.id === id});
    if (filter) {
      this.store.dispatch(setFilter(filter));
    }
  }

  hasTodosCompleted() {
    const todos = this.store.getState().todoListReducer.todos;
    return todos.some((todo)=>{
      return todo.completed === true;
    })
  }

  hasTodos() {
    const todos = this.store.getState().todoListReducer.todos;
    return todos.length;
  }

  onClearCompleted() {
    const todos = this.store.getState().todoListReducer.todos;
    this.store.dispatch(clearCompletedTodo(todos.filter((todo)=>{return todo.completed === true})));
  }


}
