import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './book-list.css';
import Book from './Book';
import BookForm from '../addBook/BookForm';
import { fetchBooks } from '../../redux/apis';

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div className="book-list">
        {books.length > 0 ? (
          <ul className="book">
            {books.map((bookItem) => (
              <Book bookItem={bookItem} key={bookItem.item_id} />
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
