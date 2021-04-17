import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const rootReducer = combineReducers({
  reducer,
});

const savedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = createStore(
  rootReducer,
  savedState,
  composeWithDevTools(applyMiddleware(thunk))
);