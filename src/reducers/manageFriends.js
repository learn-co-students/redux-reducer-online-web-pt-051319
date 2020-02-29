export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      var newFriends = state.friends.filter(f => {
        if (f.id !== action.id) {
          return f;
        }
      });
      return { friends: newFriends };
    default:
      return state;
  }
}
