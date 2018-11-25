import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// input list => TodoInput.js
// todo list => TodoList.js
// 이번엔 다른 파일에 만들어봅시다


class Todo extends React.Component {

  state = {
    todos: [
      '청소하기',
      '빨래하기',
      '방정리하기'
    ],
    value: '',
  }

  handleDelete = (value) => {
    // console.log(value);

    const newTodos = this.state.todos.filter((todo) => {
      return todo !== value;
    });

    console.log(newTodos);

    this.setState({
      todos: newTodos
    });

  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      value
    });

  }

  handleAdd = () => {
    this.setState({
      todos: [
        ...this.state.todos, // 기존 todos
        this.state.value
      ],
      value :'',
    })
  }

  render() {
    const { todos, value } = this.state;
    return (
      <div>
        <TodoList 
          todos={todos}
          onDelete={this.handleDelete}
        />
        <TodoInput 
          value={value}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
      </div>
    )
  }
}

export default Todo;