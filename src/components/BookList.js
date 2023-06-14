// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookInput from './BookInput';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.bookList);

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
      <BookInput />
    </>
  );
};

export default BookList;
