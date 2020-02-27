import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const makeStore = (initialState) => createStore(rootReducer, initialState, composeEnhancers());
export default makeStore;
