export const getBooksSuccess = data => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books: data
  }
}

export const getBooks = () => {
  return (dispatch) => {
    //do fetch request then dispatch getBooksSuccess
  }
}
