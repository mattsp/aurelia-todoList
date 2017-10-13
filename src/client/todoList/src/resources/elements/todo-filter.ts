import {bindable} from 'aurelia-framework';

export class TodoFilterCustomElement {
  @bindable id;
  @bindable name;
  @bindable selected: boolean;
  @bindable onClick;

  onClickActiveFilter():void {
    this.selected = true;
    this.onClick({id: this.id});
  }
}

