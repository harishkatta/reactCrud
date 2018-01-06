
let defaultState=[];
const doneStatus = (state=defaultState, action) => {
	switch(action.type) {

		case 'CHANGE_DONE_STATUS':
		return [...state, action.id];

		default:
		return state
	}
}
export default doneStatus;
