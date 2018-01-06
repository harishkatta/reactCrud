/**
 * Created by Kattas on 1/3/2018.
 */
import { combineReducers } from 'redux';

import addTodoReducer from "./reducers/addTodoReducer";
import deleteToDoReducer from "./reducers/deleteToDoReducer";
import doneStatus from './reducers/changeDoneStatusReducer';


const rootReducer=combineReducers({
    toDoList: addTodoReducer,
    deletedToDoList: deleteToDoReducer,
	doneStatus:doneStatus
});
export default rootReducer;
