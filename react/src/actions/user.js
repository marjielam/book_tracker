// update this to actually get the user from the database
// make it user: user

export function getCurrentUser(currentUserId) {
  return {
    type: 'GET_CURRENT_USER',
    user: currentUserId
  }
}
