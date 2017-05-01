export const getBooksSuccess = data => {
  return {
    type: 'GET_BOOKS',
    books: data
  }
}

export const getBooks = (currentUserId) => {
  return (dispatch) => {
    fetch(`api/v1/users/${currentUserId}/books`)
    .then(response => {
    if (response.ok) {
      return response
    } else {
      let errorMessage = `${response.status}, (${response.statusText})`;
      let error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => {
    let books = response.json();
    return books;
  })
  .then(books => {
    return dispatch(getBooksSuccess(books))
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}
