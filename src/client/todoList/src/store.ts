import { IAction, IState } from 'interfaces/index';
import { Store, applyMiddleware, compose, createStore } from 'redux';

import {createLogger} from 'redux-logger';
import reducer from 'reducers/index';
import thunk from 'redux-thunk';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

function configureStore():Store<IState> {
  return createStore<IState>(<any>reducer, middleware);
}

export const reduxStore = configureStore();

