const initialState = {
  user: null
}

function user(state = initialState, action) {
  switch(action.type) {
    case 'GET_CURRENT_USER':
      let newState = {
        user: action.user
      };
      return Object.assign({}, newState);
    default:
      return state;
  }
  return state;
}

export default user;
