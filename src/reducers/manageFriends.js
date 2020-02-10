export function manageFriends(state = {
    friend: []}, action){
        switch(action.type) {
            case 'ADD_FRIEND': 
                return ({...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]})
            case 'REMOVE_FRIEND':
                //wow, ok I have to go thru this a few more times to wrap my head around this
                const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
                    return ({...state,
                    friends: [
                        ...state.friends.slice(0, removalIndex),
                        ...state.friends.slice(removalIndex + 1)
            ]})
            default:
                return state;
        }
}
