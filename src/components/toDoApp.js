import React from 'react';
import DisplayList from './displayList';
var rand = require('random-key')

class ToDoList extends React.Component {

    constructor(){
        super();
        this.state= {
            title:'',
            todos:[
              {title:"Apple", done: false, id:1},
              {title:"Mango", done: false, id:2},
              {title:"Grapes", done: false, id:3}
            ]
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let title=this.state.title;
        if(title !== '') {
          let newtodos= this.state.todos.concat({title:title, done:false, id:rand.generate()});
          this.setState({title: '', todos:newtodos});
        }
    }

    handleChange(e){
      let title=e.target.value;
      console.log(this.refs.myInput.value);
        this.setState({title: title});
    }

    handleDelete(idTobeDeleted){
      let remainingTodoos=this.state.todos.filter((todo)=>{
        return todo.id != idTobeDeleted;
      });
      this.setState({todos:remainingTodoos});
    }

    handleDone(idToBeMarkedAsDone){
      var _todos =this.state.todos;
      var todo=_todos.filter((todo)=>{
        return todo.id=== idToBeMarkedAsDone;
      })[0];
      //filter will return array of todo objects so picking first array object
      todo.done = !todo.done;
      this.setState({todos:_todos});
    }

    handleClear(e){
      //it will return done as false state
      //let newTodos=this.state.todos.filter((todo) => !todo.done);
      let newTodos=this.state.todos.filter((todo) => {return !todo.done});
      this.setState({todos:newTodos})
    }

    render() {
        return (
            <div>
                TODOS!!!
                <form onSubmit= {this.handleSubmit.bind(this)}>
                    <input onChange={this.handleChange.bind(this)} value ={this.state.title} ref="myInput"/>
                    <button>submit</button>
                </form>


                <DisplayList
                  todos={this.state.todos}
                  handleDone={this.handleDone.bind(this)}
                  handleDelete= {this.handleDelete.bind(this)}
                />
                <footer>
                  ALL: {this.state.todos.length} |
                  Completed: {this.state.todos.filter((todo)=> todo.done).length} |
                  Pending: {this.state.todos.filter((todo)=> !todo.done).length} |
                  <a href='#' onClick={this.handleClear.bind(this)}>Clear Completed</a>
                </footer>
            </div>
        );
    }
}

export default ToDoList;
