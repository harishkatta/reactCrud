import React from 'react';
import DisplayItem from './DisplayItem';

export default class DisplayList extends React.Component {

    render(){
        return (
            <ul>
                {this.props.todos.map((todo)=>{
                      return <DisplayItem
                                key ={todo.id}
                                todo={todo}
                                handleDone={this.props.handleDone.bind(null,todo.id)}
                                handleDelete={this.props.handleDelete.bind(null,todo.id)}/>})}
            </ul>

        );
    }
}
