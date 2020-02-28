export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let newFriends = ;
      return { friends: [
        ...state.friends,
action.friend
]};
    case "REMOVE_FRIEND":
      let newFriends = state.friends.splice(action.id, 1);
      return { friends: newFriends};
    default:
      return state;
  }
}
