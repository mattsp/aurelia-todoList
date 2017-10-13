import { FETCH_FILTERS_FAILURE, FETCH_FILTERS_LOADING, FETCH_FILTERS_SUCCESS, SET_FILTERS } from 'actions/index';
import { IAction, IFilterState } from 'interfaces/index';
import { IFilterBaseModel, ITaskBaseModel } from 'aurelia-todolist-models';

const INITAL_STATE:IFilterState = {
    filters: new Array<IFilterBaseModel>(),
    currentFilter: null,
    isLoading: false,
    hasError: null
}
export default function filterReducer(state:IFilterState = INITAL_STATE, action:IAction<any>): any {
  switch(action.type) {
    case FETCH_FILTERS_LOADING:
      return Object.assign({}, state, { isLoading: true })
    case FETCH_FILTERS_SUCCESS:
      const filters = action.payload;
      return Object.assign({}, state, { isLoading: false, filters, hasError: false })
    case FETCH_FILTERS_FAILURE:
      return Object.assign({}, state, { isLoading: false, hasError: true })
    case SET_FILTERS:
      const currentFilter = action.payload;
      return Object.assign({}, state, { isLoading: false, currentFilter, hasError: false})
    default:
      return state
  }
}
