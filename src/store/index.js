import { createStore } from 'redux';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  { todoList: [] },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools()
);
export default store;
