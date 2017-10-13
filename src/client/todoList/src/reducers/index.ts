import { combineReducers } from 'redux';
import filterReducer  from 'reducers/filtersReducer';
import todoListReducer  from 'reducers/todosReducer';

const rootReducer = combineReducers({
  todoListReducer,
  filterReducer
});

export default rootReducer;
