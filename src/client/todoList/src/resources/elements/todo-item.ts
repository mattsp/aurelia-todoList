import {bindable, bindingMode} from 'aurelia-framework';

import { ITaskBaseModel } from 'aurelia-todolist-models';

export class TodoItemCustomElement {
  @bindable
  id:string;

  @bindable
  title:string;

  @bindable
  completed:boolean;

  @bindable   
  onCompleted:(any)=>{};

  @bindable   
  onRemoved:(any)=>{};

  @bindable
  onEdited:(any)=>{};

  editable:(any)=>{};

  todoItem:HTMLElement;
  todoItemContainer:HTMLElement;
  todoEditInput:HTMLElement;
  
  onDoubleClickItem():void {
    this.editableMode(true);
  }

  editableMode(value: boolean):void {
    if (value === true) {
      this.todoItem.className += ' todo-item--editing';
      this.todoItemContainer.className += ' todo-item__container--editing';
      this.todoEditInput.className += ' todo-item__input--editing';
      this.todoEditInput.focus();
    } else {
      this.todoItem.className = this.todoItem.className.replace('todo-item--editing', '');
      this.todoItemContainer.className = this.todoItemContainer.className.replace('todo-item__container--editing', '');
      this.todoEditInput.className = this.todoEditInput.className.replace('todo-item__input--editing', '');
    }
  }

  edit():void {
    this.editableMode(false);
    const item = {id: this.id, title: this.title, completed: this.completed} as ITaskBaseModel;
    this.onEdited({todo: item});
  }

  destroy():void {
    const item = {id: this.id, title: this.title, completed: this.completed} as ITaskBaseModel;
    this.onRemoved({todo: item});
  }

  completedChanged():void {
    if (this.onCompleted) {
      const item = {id: this.id, title: this.title, completed: this.completed} as ITaskBaseModel;
      this.onCompleted({todo: item});
    }
  }
}

