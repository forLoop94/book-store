import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import style from '../styles/BookList.module.css';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { id } = book;
  console.log(book.image);

  return (
    <li className={style.book}>
      <img src={book.image} alt={book.title} />
      <div className={style.details}>
        <small>{book.category}</small>
        <h3>{book.title}</h3>
        <p className={style.blue}>{book.author}</p>
        <div className={style.btnContainer}>
          <button type="button">Comments</button>
          <div className={style.verticalBreak} />
          <button onClick={() => dispatch(deleteBook(id))} type="button">
            Remove
          </button>
          <div className={style.verticalBreak} />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style.otherDetails}>
        <div className={style.middle}>
          <div className={style.circle} />
          <div className={style.circleSibling}>
            <h4>100%</h4>
            <p className={style.status}>Completed</p>
          </div>
        </div>
        <div className={style.verticalBreak} />
        <div className={style.right}>
          <p className={style.status}>CURRENT CHAPTER</p>
          <h4>Chapter 17</h4>
          <div className={style.btn}>UPDATE PROGRESS</div>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
