// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookInput from './BookInput';
import BookItem from './BookItem';
import styles from '../styles/BookList.module.css';

const BookList = () => {
  const books = useSelector((state) => state.books.bookList);

  return (
    <>
      <ul className={styles.body}>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
      <BookInput />
    </>
  );
};

export default BookList;
