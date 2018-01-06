
const deleteTodoId= (state=[], action) => {
  switch(action.type) {
    case 'DELETE_TODO':
	return [...state, action.id];
    default:
    return state;
  }
}

export default deleteTodoId;
