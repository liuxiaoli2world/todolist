/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 单条待办项目组件
 * @Date: 2019-03-02 16:01:24
 * @LastEditTime: 2019-03-02 17:39:14
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
    const { handleItemClick, index } = this.props;
    handleItemClick(index);
  }

  render() {
    const { content } = this.props;
    return <li onClick={this.handleClick}>{content}</li>;
  }
}

export default TodoItem;
