/**
 * Created by Kattas on 12/30/2017.
 */
import React from 'react';
import DisplayItem from './displayItem';

export default class DisplayList extends React.Component{

    render(){
        return(
            <ul>
              {this.props.todos.map((todo)=> {
                return <DisplayItem
                          key={todo.id}
                          todo={todo}
                          handleDoneChange={this.props.handleDoneChange.bind(null,todo.id)}
                          handleDeleteTodo={this.props.handleDeleteTodo.bind(null,todo.id)}
                        />
              })}
            </ul>
        );
    }
}
