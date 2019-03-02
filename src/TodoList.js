/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 代办组件
 * @Date: 2019-03-01 15:56:57
 * @LastEditTime: 2019-03-02 17:50:03
 */
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  /**
   * @description: 输入框内容改变事件处理
   * @param {event}
   * @return:
   */
  onChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  /**
   * @description: 添加按钮点击事件处理
   * @param {event}
   * @return:
   */
  handleBtnClick(event) {
    this.setState(preState => ({
      inputValue: '',
      list: [...preState.list, preState.inputValue]
    }));
  }

  /**
   * @description: 列表项目点击事件处理
   * @param {number} 点击项目的索引
   * @return:
   */
  handleItemClick(index) {
    this.setState(preState => {
      const list = [...preState.list];
      list.splice(index, 1);
      return { list };
    });
  }
  
  /**
   * @description: 生成列表
   * @return: 
   */
  geneListItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleItemClick={this.handleItemClick}
        />
      );
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={this.onChange}
        />
        <button onClick={this.handleBtnClick}>添加</button>
        <ul>{this.geneListItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
