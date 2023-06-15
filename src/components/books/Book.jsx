import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import { bookButtons } from '../navigationsLinks';
import './book.css';
import { removeBook, fetchBooks } from '../../redux/apis';

const progressValue = 64;

const getColor = (value) => {
  if (value >= 90) {
    return '#00FF00'; // Green color for values >= 90
  } if (value >= 70) {
    return '#FFA500'; // Orange color for values >= 70
  }
  return '#307bbe'; // Red color for values < 70
};

const Book = ({ bookItem }) => {
  const dispatch = useDispatch();
  const color = getColor(progressValue);

  const progressStyles = {
    path: {
      stroke: color,
    },
  };

  const removeBookItem = (itemId) => {
    dispatch(removeBook(itemId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (!bookItem) {
    return (
      <div>No book</div>
    );
  }

  return (
    <div className="each-book">
      <div className="book-details">
        <ul className="details">
          <li>{bookItem.category}</li>
          <li>{bookItem.title}</li>
          <li>{bookItem.author}</li>
        </ul>

        <ul className="menu-items book-buttons">
          {bookButtons.map((button) => (
            <li key={button.id}>
              <NavLink
                className="book-items"
                id={button.id}
                onClick={
                  button.title === 'Remove'
                    ? () => removeBookItem(bookItem.item_id)
                    : undefined
                }
              >
                {button.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="status">
        <div className="progress-status">
          <CircularProgressbar value={progressValue} styles={progressStyles} />
        </div>

        <div className="status-percentage">
          <div className="percentage values">64%</div>
          <div className="complete values">completed</div>
        </div>
      </div>

      <div className="chapter">
        <div className="chapter-details">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <span>chapter: Introduction</span>
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookItem: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    completed: PropTypes.string,
    chapter: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default Book;
