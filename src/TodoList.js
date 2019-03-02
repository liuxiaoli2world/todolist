/*
 * @Author: liuxiaoli
 * @LastEditors: liuxiaoli
 * @Description: 代办组件
 * @Date: 2019-03-01 15:56:57
 * @LastEditTime: 2019-03-02 16:48:02
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
    this.setState({ inputValue: event.target.value });
  }

  /**
   * @description: 添加按钮点击事件处理
   * @param {event} 
   * @return: 
   */
  handleBtnClick(event) {
    this.setState({
      inputValue: '',
      list: [this.state.inputValue, ...this.state.list]
    });
  }

  /**
   * @description: 列表项目点击事件处理
   * @param {number} 点击项目的索引
   * @return: 
   */
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          className="input"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
        <button onClick={this.handleBtnClick}>添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                content={item}
                index={index}
                handleItemClick={this.handleItemClick}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
