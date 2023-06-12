import React from 'react';

import './addBook.css';

const BookForm = () => (
  <div className="container">
    <div className="title">ADD NEW BOOK</div>
    <form className="book-form" onSubmit={() => {}}>
      <input type="text" placeholder="Book title" />
      <select className="drop-down" disabled>
        <option value="">Category</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
