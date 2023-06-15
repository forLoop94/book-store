/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/BookList.module.css';
// import { addBook } from '../redux/books/booksSlice';
import { createBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // const book = {
  //   id: crypto.randomUUID(),
  //   category: 'Science Fiction',
  //   title,
  //   author,
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // if (title !== '') {
  //   //   dispatch(addBook({ book }));
  //   //   setTitle('');
  //   //   setAuthor('');
  //   // }
  //   // if (title.length > 1 && author.length > 1) {
  //   //   return dispatch(createBook({
  //   //     item_id: crypto.randomUUID(),
  //   //     title,
  //   //     author,
  //   //     category: 'Science Fiction',
  //   //   }));
  //   // }
  //   // return <div>Fill in the blanks</div>;
  // };

  return (
    <form className={style}>
      <label htmlFor="book">ADD NEW BOOK</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="book"
        placeholder="Book Item"
      />
      <input
        type="text"
        value={author}
        id="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
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
          return <div>Fill in the blanks</div>;
        }}
        type="submit"
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default BookInput;
