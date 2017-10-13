import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';
import {bindable, inject} from 'aurelia-framework';

import { IState } from 'interfaces/index';
import { ITodosState } from 'interfaces/ITodosState';
import {Store} from 'redux';
import { addTodo } from 'actions/index';
import {reduxStore} from 'store';
import {removeTodo} from 'actions/index'

@inject(reduxStore)
export class TodoHeaderContainerCustomElement {
  
  constructor(private store:Store<IState>) {
  }

  onCreateTodo(title:string) {
    const item = {title, completed: false} as ITaskBaseModel;
    this.store.dispatch(addTodo(item));
  }

}
