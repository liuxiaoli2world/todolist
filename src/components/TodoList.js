/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 代办组件
 * @Date: 2019-03-01 15:56:57
 * @LastEditTime: 2019-03-06 15:52:09
 */
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import store from '../store';
import { addTodoListItemAction, deleteTodoListItemAction } from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  /**
   * @description: 添加按钮点击事件处理
   * @param {event}
   * @return:
   */
  handleBtnClick(event) {
    store.dispatch(addTodoListItemAction(this.input.value));
    this.input.value = '';
  }

  /**
   * @description: 列表项目点击事件处理
   * @param {number} 点击项目的索引
   * @return:
   */
  handleItemClick(id) {
    store.dispatch(deleteTodoListItemAction(id));
  }

  /**
   * @description: 生成列表
   * @return:
   */
  geneListItems() {
    return store.getState().list.map((item, index) => {
      return (
        <TodoItem
          key={item.id}
          {...item}
          handleItemClick={this.handleItemClick}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          className="input"
          ref={node => {
            this.input = node;
          }}
        />
        <button onClick={this.handleBtnClick}>添加</button>
        <ul>{this.geneListItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
