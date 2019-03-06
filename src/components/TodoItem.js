/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 单条待办项目组件
 * @Date: 2019-03-02 16:01:24
 * @LastEditTime: 2019-03-06 15:49:42
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  handleClick() {
    const { handleItemClick, id } = this.props;
    handleItemClick(id);
  }

  render() {
    const { content } = this.props;
    return <li onClick={this.handleClick}>{content}</li>;
  }
}

/**
 * @description: 属性的类型校验
 */
TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItemClick: PropTypes.func
};

export default TodoItem;
