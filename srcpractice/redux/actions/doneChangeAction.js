var rand = require('random-key');

export function changeDoneStatus(id) {
	return {
		type:'CHANGE_DONE_STATUS',		
		id:id
	};
}