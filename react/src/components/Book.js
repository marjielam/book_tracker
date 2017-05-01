import React from 'react';

const Book = (props) => {
  return(
    <div className="book">
      <h2 className="title">{props.book.title}</h2>
      <h3 className="author">{props.book.author}</h3>
    </div>
  );
}

export default Book;
