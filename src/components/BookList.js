import React, { useState } from 'react';
import BookInput from './BookInput';
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    setBooks(() => {
      const newBook = {
        id: crypto.randomUUID(),
        category: 'Science Fiction',
        title,
        author: 'Scarlet Summers',
      };
      return [...books, newBook];
    });
  };

  const removeBook = (id) => {
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} removeBook={removeBook} />
        ))}
      </ul>
      <BookInput addBook={addBook} />
    </>
  );
};

export default BookList;
