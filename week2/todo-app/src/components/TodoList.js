import React from 'react';


class TodoList extends React.Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
        <div>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <button onClick={() => onDelete(todo)}>삭제</button>
                </li>
              )
            })}
            
          </ul>
        </div>
    )
  }
}

export default TodoList;