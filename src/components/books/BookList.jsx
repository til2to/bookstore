// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Book from './Book';
import BookForm from '../addBook/BookForm';
import './book-list.css';
import { addBook } from '../../redux/books/booksSlice';

let counter = 0;

// generate unique numbers
const generateUniqueId = () => {
  counter += 1;
  return `menu-item-${counter}`;
};

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  const handleAddBook = () => {
    const newBook = {
      item_id: generateUniqueId(),
      title: 'New Book',
      author: 'New Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <div className="book-list">
        {books.length > 0 ? (
          <ul className="book">
            {books.map((bookItem) => (
              <Book bookItem={bookItem} key={generateUniqueId()} />
            ))}
          </ul>
        )
          : 'No books'}
      </div>
      <div className="buttons-container">
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </div>
      <BookForm />
    </>
  );
};

export default BookList;
