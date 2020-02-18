export function managePresents(state, action){
	return action.type == 'INCREASE' ? { numberOfPresents: state.numberOfPresents + 1 } : state
}