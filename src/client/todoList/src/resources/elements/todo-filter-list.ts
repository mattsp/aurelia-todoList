import { IFilterBaseModel } from 'aurelia-todolist-models';
import {bindable} from 'aurelia-framework';

export class TodoFilterListCustomElement {
  
  @bindable
  filters:Array<IFilterBaseModel>;
  @bindable
  currentFilter: IFilterBaseModel;
  @bindable
  onFilterChange;

  onFilterSelected(id) {
    if (id !== this.currentFilter.id) {
      this.onFilterChange({id});
    }
  }
}

