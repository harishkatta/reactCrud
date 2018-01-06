/**
 * Created by Kattas on 12/30/2017.
 */
import React from 'react';
//import styles from './app.css';

export default class DisplayItem extends React.Component{
    //<input value={todo.title} />
    render(){
      let todo=this.props.todo
        return(
            <li key={todo.id}>
              <div className='displaylist'>
                <input type='checkbox' checked={todo.done} onChange ={this.props.handleDoneChange.bind(null, todo.id)}/>
                {todo.title}
                <a href='#' onClick={this.props.handleDeleteTodo.bind(null, todo.id)}>[x]</a>
              </div>
            </li>
        );
    }
}
