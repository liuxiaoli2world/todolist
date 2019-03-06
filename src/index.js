import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import store from './store';

ReactDOM.render(<TodoList />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<TodoList />, document.getElementById('root'));
});
