
let defaultState=[
		{title:'Apple', done: false, id:1},
		{title:'Grapes', done: false, id:2},
		{title:'Orange', done: false, id:3}
];
const todos= (state=defaultState,action) => {
	switch(action.type) {

		case 'ADD_TODO':
		return [...state, {title:action.title, done:false, id:action.id}]

		default:
		return state
	}
}
export default todos;
