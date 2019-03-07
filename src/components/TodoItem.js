/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 单条待办项目组件
 * @Date: 2019-03-02 16:01:24
 * @LastEditTime: 2019-03-07 15:44:11
 */
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { id, content } = props;
  return <li onClick={() => props.handleItemClick(id)}>{content}</li>;
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
