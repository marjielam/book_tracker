// update this to actually get the user from the database
// make it user: user

export const getCurrentUserSuccess = (user) => {
  return {
    type: 'GET_CURRENT_USER',
    user: user
  }
}

export const getCurrentUser = (currentUserId) => {
  return (dispatch) => {
    fetch(`api/v1/users/${currentUserId}`)
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
    let user = response.json();
    return user;
  })
  .then(user => {
    return dispatch(getCurrentUserSuccess(user))
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}
