import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    'resources/elements/todo-input',
    'resources/elements/todo-toggle',
    'resources/elements/todo-list',
    'resources/elements/todo-item',
    'resources/elements/todo-count',
    'resources/elements/todo-filter-list',
    'resources/elements/todo-filter',
    'resources/elements/todo-clear-completed'
  ]);
}
