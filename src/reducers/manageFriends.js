export function manageFriends(state = {friends: []}, action){

    switch(action.type) {
        case "ADD_FRIEND":
            return{friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":
            return {friends: state.friends.filter( friend => friend.id != action.id)}
            // filter creates new array by filtering out all elements that do not pass test implemented by callback
            default:
                return state;
    }
}
