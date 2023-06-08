import React from 'react';
import { PropTypes } from 'prop-types';

const BookItem = ({ book }) => (
  <>
    <small>{book.category}</small>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <div className="flex btn-container">
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
