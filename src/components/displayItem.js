import React from 'react';

export default class DisplayItem extends React.Component {

  render(){
    var todo =this.props.todo;
    var title =todo.title;
    return <li>
            <input type="checkbox" checked={todo.done} onChange={this.props.handleDone.bind(null,todo.id)} />
            {title}
            <a href='#' onClick={this.props.handleDelete.bind(null,todo.id)}>[x]</a>
          </li>;
  }
}
