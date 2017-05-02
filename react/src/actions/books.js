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

export const addBookSuccess = data => {
  return {
    type: 'ADD_BOOK',
    books: data
  }
}

export const addBook = (currentUserId) => {
  return (dispatch) => {
    let title = document.getElementById('add-book-title').value;
    let author = document.getElementById('add-book-author').value;
    let numPages = document.getElementById('add-book-num-pages').value;
    let bookData = {
      'book': {
        'title': title,
        'author': author,
        'num_pages': numPages
      }
    };
    let jsonStringData = JSON.stringify(bookData);
    fetch(`api/v1/users/${currentUserId}/books`, {
      method: 'post',
      body: jsonStringData
    })
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
    return dispatch(addBookSuccess(books))
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}
