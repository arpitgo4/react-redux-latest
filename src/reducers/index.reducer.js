
const reducer = (state = {}, action) => {

	switch(action.type){
		case 'ADD_EVENTS': 
			 return {
				 ...state, 
				 events: [ ...action.events ]
			 };
		
		case 'LOGIN':
			console.log('logging in', action.username);
			 return state;
		default: return state;
	}
};

export default reducer;