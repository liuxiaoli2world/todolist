import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  onChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleBtnClick(event) {
    this.setState({
      inputValue: '',
      list: [this.state.inputValue, ...this.state.list]
    });
  }

  handleItemClick(index, event) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleItemClick.bind(this, index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
