import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import style from '../styles/BookList.module.css';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { id } = book;

  const handleClick = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <li className={style.book}>
      <small>{book.category}</small>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className={style.btnContainer}>
        <button type="button">Comments</button>
        <button onClick={handleClick} type="button">
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
};

export default BookItem;
