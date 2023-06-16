/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/BookList.module.css';
import { addBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const book = {
    id: crypto.randomUUID(),
    category: 'Science Fiction',
    title,
    author: 'Scarlet Summers',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      dispatch(addBook({ book }));
      setTitle('');
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit} className={style}>
      <label htmlFor="book">ADD NEW BOOK</label>
      <div className={style.form}>
        <input
          className={style.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="book"
          placeholder="Book Item"
        />
        <input className={style.catInput} type="number" id="category" placeholder="Category" />
        <button className={style.bookBtn} type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookInput;
