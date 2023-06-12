/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/BookList.module.css';

const BookInput = ({ addBook }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  };

  return (
    <form action="#" onSubmit={handleSubmit} className={style}>
      <label htmlFor="book">ADD NEW BOOK</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="book"
        placeholder="Book Item"
      />
      <input type="text" id="category" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

BookInput.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookInput;
