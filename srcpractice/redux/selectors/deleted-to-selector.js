import {createSelector} from 'reselect';
const getTodoList=state => state.toDoList;
const getdeletedToDoId = state => state.deletedToDoList;

export const deletedToDoIdsSelector = createSelector([getTodoList, getdeletedToDoId],(todos, deletedIds) => {
	let newtodos= todos.filter((todo)=> {

	    if (deletedIds.includes(todo.id)){
			return false;
		}
		return true;			       
    });
    return newtodos;

});
