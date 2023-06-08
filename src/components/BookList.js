/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const booksArray = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Scarlet Summers',
    },
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Scarlet Summers',
    },
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Scarlet Summers',
    },
  ];

  const [books, setBooks] = useState(booksArray);

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
