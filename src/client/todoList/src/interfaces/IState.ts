import { IFilterState } from './IFilterState';
import { ITodosState } from './ITodosState';

export interface IState {
  todoListReducer:ITodosState;
  filterReducer:IFilterState;
}
