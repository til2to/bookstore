import React, { useState } from 'react';

import Book from './Book';
import BookForm from '../addBook/BookForm';
import './book-list.css';

let counter = 0;

const generateUniqueId = () => {
  counter += 1;
  return `menu-item-${counter}`;
};

const BookList = () => {
  const [books, setBooks] = useState([
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: '64%',
      chapter: 'Chapter 17',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completed: '8%',
      chapter: 'Chapter 3: "A Lesson learned"',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: '0%',
      chapter: 'Introduction',
    },
  ]);

  return (
    <>
      <div className="book-list">
        <ul className="book">
          {books.map((bookItem) => (
            <Book bookItem={bookItem} key={generateUniqueId()} setBooks={setBooks} />
          ))}
        </ul>
      </div>
      <BookForm />
    </>
  );
};

export default BookList;
