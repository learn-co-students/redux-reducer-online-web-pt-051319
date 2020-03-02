export function manageFriends(state = { friends: [] }, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            let result = state.friends.filter(el => (action.id !== el.id))
            return { friends: [...result] }
        default:
            return state;
    }
}
