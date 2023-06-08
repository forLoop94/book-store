/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import style from '../styles/BookList.module.css';

const BookInput = () => (
  <form action="#" className={style}>
    <label htmlFor="book">ADD NEW BOOK</label>
    <input type="text" id="book" placeholder="Book Item" />
    <input type="text" id="category" placeholder="Category" />
    <button type="submit">ADD BOOK</button>
  </form>
);

export default BookInput;
