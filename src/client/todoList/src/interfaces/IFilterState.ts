import { IFilterBaseModel } from 'aurelia-todolist-models';

type IFilter = {
  filters:  Array<IFilterBaseModel>,
  currentFilter: IFilterBaseModel,
  isLoading: false,
  hasError: null
}

export interface IFilterState {
  filters:  Array<IFilterBaseModel>,
  currentFilter: IFilterBaseModel,
  isLoading: false,
  hasError: null
}
