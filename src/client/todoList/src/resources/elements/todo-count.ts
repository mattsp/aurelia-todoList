import { bindable, bindingMode } from 'aurelia-framework';
export class TodoCountCustomElement {
  @bindable
  value: number;
  @bindable
  itemsName: string;
  @bindable
  itemsPosition: string;
  constructor() {
  }
}
