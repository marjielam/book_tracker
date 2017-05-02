import React from 'react';

const BookForm = (props) => {
  return(
    <form className="add-book" onSubmit={props.handleSubmitBook}>
      <input type="text" id="add-book-title" placeholder="Title" / ><br/>
      <input type="text" id="add-book-author" placeholder="Author" /><br/>
      <input type="text" id="add-book-num-pages" placeholder="Number of pages" /><br/>
      <input type="submit" value="Add book"/>
    </form>
  );
}

export default BookForm;
