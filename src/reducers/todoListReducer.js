import uuid from 'uuid/v4';
import { ADD_TODO_LIST_ITEM, DELETE_TODO_LIST_ITEM } from '../constants';

export default (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_TODO_LIST_ITEM:
      newState = [
        ...state,
        {
          id: uuid(),
          content: action.payload.content
        }
      ];
      break;
    case DELETE_TODO_LIST_ITEM:
      newState = state.filter(item => item.id !== action.payload.id);
      break;
    default:
      newState = [...state];
  }
  return newState;
};
