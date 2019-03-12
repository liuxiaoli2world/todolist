/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 待办组件
 * @Date: 2019-03-01 15:56:57
 * @LastEditTime: 2019-03-07 15:27:47
 */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { addTodoListItemAction, deleteTodoListItemAction } from '../actions';

const TodoList = ({ addClick, itemClick, todoList }) => {
  let input;

  function itemClickEvent(value) {
    addClick(value);
    console.log('object');
    input.value = '';
  }

  return (
    <Fragment>
      <input type="text" className="input" ref={node => (input = node)} />
      <button onClick={() => itemClickEvent(input.value)}>添加</button>
      <ul>
        {todoList.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            handleItemClick={e => itemClick(item.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todoList: [...state.todoList]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClick: value => dispatch(addTodoListItemAction(value)),
    itemClick: id => dispatch(deleteTodoListItemAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
