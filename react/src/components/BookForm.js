import React from 'react';

const BookForm = (props) => {
  return(
    <div className="add-book">
      <form className="add-book" onSubmit={props.handleSubmitBook}>
        <input type="text" id="add-book-title" placeholder="TITLE" / ><br/>
        <input type="text" id="add-book-author" placeholder="AUTHOR" /><br/>
        <input type="text" id="add-book-num-pages" placeholder="NUMBER OF PAGES" /><br/>
        <input type="submit" value="Add book"/>
      </form>
    </div>
  );
}

export default BookForm;
