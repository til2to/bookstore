// import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import BookForm from '../addBook/BookForm';
import './book-list.css';
import { generateUniqueId } from '../navigationsLinks';

// let counter = 0;

// // generate unique numbers
// const generateUniqueId = () => {
//   counter += 1;
//   return `menu-item-${counter}`;
// };

const BookList = () => {
  const { books } = useSelector((store) => store.books);

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
      <BookForm />
    </>
  );
};

export default BookList;
