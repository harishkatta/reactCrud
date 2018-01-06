var rand = require('random-key');

export function addToDo(title) {
	return {
		type:'ADD_TODO',
		id: rand.generate(),		
		title:title
	};
}