import React from 'react';

import './addBook.css';

const BookForm = () => (
  <div className="container">
    <div className="title">ADD NEW BOOK</div>
    <form className="book-form" onSubmit={() => {}}>
      <input type="text" placeholder="Book title" />
      <select className="drop-down" disabled>
        <option value="">Author</option>
        <option value="non-fiction">Frank Herbert</option>
        <option value="fantasy">Suzanne Collins</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
