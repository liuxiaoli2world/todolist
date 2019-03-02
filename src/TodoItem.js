/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 单条待办项目组件
 * @Date: 2019-03-02 16:01:24
 * @LastEditTime: 2019-03-02 18:34:35
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
  handleClick(event) {
    const { handleItemClick, index } = this.props;
    handleItemClick(index);
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
  content: PropTypes.string,
  handleItemClick: PropTypes.func,
  index: PropTypes.number.isRequired
}

/**
 * @description: 设置属性的默认值
 * @return: 
 */
TodoItem.defaultProps = {
  index: 0
}

export default TodoItem;
