import { bindable, inject } from 'aurelia-framework';
import { fetchFilters, fetchTodos } from 'actions/index';

import {reduxStore} from 'store';

@inject(reduxStore)
export class App {

  @bindable
  showFooter:boolean;
  
  constructor(private store) {
    this.store.dispatch(fetchTodos());
    this.store.dispatch(fetchFilters());
    this.store.subscribe(this.update.bind(this));
  }

  update() {
    this.displayFooter();
  }

  displayFooter() {
    const todosCounter = this.store.getState().todoListReducer.todos.length;
    if (todosCounter > 0) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
  }
}
