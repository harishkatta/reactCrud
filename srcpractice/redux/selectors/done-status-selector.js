import {createSelector} from 'reselect';

const getTodoList=state => state.toDoList;
const getDoneStatus = state => state.doneStatus;


export const doneStatusSelector = createSelector([getTodoList, getDoneStatus],(todos, doneIds) => {
	
	let newTodos = todos.map((todo)=> {
		if(doneIds.includes(todo.id)){
			todo.done=!todo.done
			return (todo)
		}
		return todo;			       
    });
	console.log('doneStatusSelector');
	console.log(newTodos)
return newTodos;

});
