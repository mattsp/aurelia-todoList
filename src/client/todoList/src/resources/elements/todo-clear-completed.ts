import {bindable} from 'aurelia-framework';

export class TodoClearCompletedCustomElement {
  @bindable onClear;

  onClick() {
    this.onClear();
  }
}

