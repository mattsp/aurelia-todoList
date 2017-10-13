import {HttpClient} from 'aurelia-http-client';
import { IAction } from 'interfaces/IAction';
import { IFilterBaseModel } from 'aurelia-todolist-models';

// todo list
export const  FETCH_FILTERS = 'FETCH_FILTERS';
export const FETCH_FILTERS_LOADING = 'FETCH_FILTERS_LOADING';
export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS';
export const FETCH_FILTERS_FAILURE = 'FETCH_FILTERS_FAILURE';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SET_FILTERS = 'SET_FILTERS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:4000' : '/api';

// filter fetch
function fetchFiltersAsync() {
  const client = new HttpClient();
  return client.get( `${ROOT_URL}/filters`);
}

function fetchFilterLoading():IAction<any> {
  return {
    type: FETCH_FILTERS_LOADING,
    payload: null
  };
}

function fetchFiltersSuccess(filters):IAction<Array<IFilterBaseModel>> {
  return {
    type: FETCH_FILTERS_SUCCESS,
    payload: filters
  };
}

function fetchFiltersFailure(error):IAction<any> {
  return {
    type: FETCH_FILTERS_FAILURE,
    payload: error
  };
}

export function fetchFilters() {
  
  return function (dispatch) {
    dispatch(fetchFilterLoading());
    return fetchFiltersAsync().then(
      todos =>  dispatch(fetchFiltersSuccess(todos.content)),
      error => dispatch(fetchFiltersFailure(error))
    );
  };
}

export function setFilter(filter:IFilterBaseModel):IAction<IFilterBaseModel> {
  return {
    type: SET_FILTERS,
    payload: filter
  }
}
