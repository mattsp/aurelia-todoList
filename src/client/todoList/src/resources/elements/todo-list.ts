import { bindable, bindingMode } from 'aurelia-framework';

import { ITaskBaseModel } from 'aurelia-todolist-models';

export class TodoList {
  @bindable
  todos:Array<ITaskBaseModel>
  @bindable
  onEdit:(todo:any)=>{};
  @bindable
  onToggle:(todo:any)=>{};
  @bindable
  onDelete:(todo:any)=>{};

  onCompleted(todo:ITaskBaseModel) {
    this.onToggle({todo});
  }

  onRemoved(todo:ITaskBaseModel) {
    this.onDelete({todo});
  }

  onEdited(todo:ITaskBaseModel) {
    this.onEdit({todo});
  }
}

