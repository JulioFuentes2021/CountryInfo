import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { countriesReducer } from './reducers/index';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default function generateStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
  return store;
}
