/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 单条待办项目组件
 * @Date: 2019-03-02 16:01:24
 * @LastEditTime: 2019-03-02 16:17:37
 */
import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @description: li 元素事件处理
   * @param {event} 
   * @return: 
   */
  handleClick(event) {
    this.props.handleItemClick(this.props.index);
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
}

export default TodoItem;
