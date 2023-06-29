/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/BookList.module.css';
import { createBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form className={style}>
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
        <input
          className={style.catInput}
          type="text"
          id="category"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={style.bookBtn}
          type="button"
          value="Add Book"
          onClick={() => {
            if (title.length > 1 && author.length > 1) {
              return dispatch(
                createBook({
                  item_id: crypto.randomUUID(),
                  title,
                  author,
                  category: 'Science Fiction',
                }),
              );
            }
            return <div>Enter title and author</div>;
          }}
        />
      </div>
    </form>
  );
};

export default BookInput;
