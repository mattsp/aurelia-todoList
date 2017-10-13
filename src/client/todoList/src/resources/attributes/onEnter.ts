import {DOM, inject} from 'aurelia-framework';

@inject(DOM.Element)
export class OnEnterCustomAttribute {
  
  onEnter:(e: KeyboardEvent) => void ;
  action;

  constructor(private element: Element) {
    this.element = element;
    this.onEnter=(ev:KeyboardEvent) => {
        //Enter keyCode is 13
        if (ev.keyCode !== 13) return;
        this.action();  
    };
  }

  attached() {
    this.element.addEventListener("keyup",this.onEnter);
  }
  
  valueChanged(newValue, oldValue) {
   this.action = newValue;
  }

  detached() {
    this.element.removeEventListener("keyup",this.onEnter);
  }
}

