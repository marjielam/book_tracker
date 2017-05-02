function books(state = [], action) {
  switch(action.type) {
    case 'GET_BOOKS':
      return action.books;
    case 'ADD_BOOK':
      return action.books;
    default:
      return state;
  }
  return state;
}

export default books;
