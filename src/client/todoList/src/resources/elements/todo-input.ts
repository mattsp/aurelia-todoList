import { bindable, bindingMode } from 'aurelia-framework';
export class TodoInputCustomElement {
  @bindable({
    defaultBindingMode: bindingMode.oneTime,    
    defaultValue: 'What needs to be done?'
  }) 
  placeholder:string
  @bindable   
  todoTitle: string;
  @bindable
  onValueChange:(value:any)=>{}

  submit() {
    this.onValueChange({title: this.todoTitle});
    this.clear();
  }

  clear() {
    this.todoTitle = null;
  }
}
