function user(state = null, action) {
  switch(action.type) {
    case 'GET_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
  return state;
}

export default user;
