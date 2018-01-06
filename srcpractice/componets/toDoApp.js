/**
 * Created by Kattas on 12/30/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import DisplayList from './displayList';
var rand = require('random-key');

import {addToDo} from '../redux/actions/addTodoAction';
import {deleteTodo} from '../redux/actions/DeleteToDoAction';
import {changeDoneStatus} from '../redux/actions/doneChangeAction';

import {deletedToDoIdsSelector} from '../redux/selectors/deleted-to-selector';
import {doneStatusSelector} from '../redux/selectors/done-status-selector';

//import styles from './app.css';

class ToDoApp extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            title:'',
            todos:[
                {title:'Apple', done: false, id:1},
                {title:'Grapes', done: false, id:2},
                {title:'Orange', done: false, id:3}
            ]
        };
    }

    handleChange(e){
        let title=e.target.value;
        this.setState({title:title});
    }

    handleSubmit(e){
        e.preventDefault();
        let title= this.state.title;
        this.props.addToDo(title);
        this.setState({title:''});
        //if(title !== '') {
          ///let newToDos=this.state.todos.concat({title:title,done:false,id:rand.generate()});
          //this.setState({title:'', todos:newToDos});
        //}
    }

    handleDoneChange(idTobeMarkedAsDone){
		this.props.changeDoneStatus(idTobeMarkedAsDone);
      
	  /*let _todos=this.state.todos;
      let todo= _todos.filter((todo) => (todo.id === idTobeMarkedAsDone))[0];
      //let todo= _todos.filter((todo) => { return (todo.id === idTobeMarkedAsDone); })[0];
      todo.done=!todo.done
      this.setState({todos:_todos});*/
    }

    handleClearTodos(todoId) {
      let _todos=this.state.todos.filter((todo) => {
        return !todo.done;
      });
      this.setState({todos:_todos});
    }

    handleDeleteTodo(idOfTodobeDelete) {
      this.props.deleteTodo(idOfTodobeDelete);
    }

    render() {
		console.log('final todos')
		console.log(this.props.nonDeletedToDos)
        return (
            <div>
            <h3>TODO</h3>
                <label> Add Todos
                  <form onSubmit={this.handleSubmit.bind(this)}>
                      <input onChange={this.handleChange.bind(this)} value={this.state.title}/>
                      <button>submit</button>
                  </form>
                </label>

            <DisplayList
                todos={this.props.nonDeletedToDos}
                handleDoneChange={this.handleDoneChange.bind(this)}
                handleDeleteTodo={this.handleDeleteTodo.bind(this)}
            />
            <footer>
                <p>
                    All: {this.props.nonDeletedToDos.length} |
                    Completed: {this.props.nonDeletedToDos.filter((todo)=> { return todo.done }).length} |
                    Pending : {this.props.nonDeletedToDos.filter((todo)=> { return !todo.done }).length} |
                    <a href='#' onClick={this.handleClearTodos.bind(this)}>Clear Marked todos</a>
                </p>
            </footer>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        todos: state.toDoList,
        deletedToDoList: state.deletedToDoList,
        nonDeletedToDos: deletedToDoIdsSelector(state),
		doneStatus: doneStatusSelector(state)
    }
};
export default connect(mapStateToProps, {addToDo, deleteTodo, changeDoneStatus})(ToDoApp);
