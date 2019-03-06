import uuid from 'uuid/v4';
import { ADD_TODO_LIST_ITEM, DELETE_TODO_LIST_ITEM } from '../constants';

export default (state = { list: [] }, action) => {
  let newState;
  newState = { ...state };
  let { list } = newState;
  switch (action.type) {
    case ADD_TODO_LIST_ITEM:
      list.push({ id: uuid(), content: action.payload.content });
      newState = { ...state, list };
      break;
    case DELETE_TODO_LIST_ITEM:
      list = list.filter(item => item.id !== action.payload.id);
      newState = { ...state, list };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};
