import { ADD_TODO_LIST_ITEM, DELETE_TODO_LIST_ITEM } from '../constants';

export function addTodoListItemAction(content) {
  return {
    type: ADD_TODO_LIST_ITEM,
    payload: { content }
  };
}

export function deleteTodoListItemAction(id) {
  return {
    type: DELETE_TODO_LIST_ITEM,
    payload: { id }
  };
}
