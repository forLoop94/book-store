import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/BookList.module.css';

const BookItem = ({ book, removeBook }) => {
  const handleClick = (id) => {
    removeBook(id);
  };

  return (
    <li className={style.book}>
      <small>{book.category}</small>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className={style.btnContainer}>
        <button type="button">Comments</button>
        <button onClick={() => handleClick(book.id)} type="button">
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
