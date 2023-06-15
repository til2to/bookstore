import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './addBook.css';
import { addNewBook } from '../../redux/apis';
import { generateUniqueId } from '../navigationsLinks';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();

    const newBook = {
      item_id: generateUniqueId(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(addNewBook(newBook));

    // // Fetch updated books data
    // dispatch(fetchBooks());

    // Reset the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container">
      <div className="title">ADD NEW BOOK</div>
      <form className="book-form" onSubmit={handleAddBook}>
        <input
          type="text"
          value={title}
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="drop-down"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        >
          <option value="">Author</option>
          <option value="John Smith">John Smith</option>
          <option value="Leo Tolstoy">Leo Tolstoy</option>
          <option value="Richard Dawkins">Richard Dawkins</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
