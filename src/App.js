import { Route, Routes, Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './styles/app.module.css';
import BookList from './components/BookList';
import Categories from './components/Categories';
import { fetchBook } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  });

  return (
    <>
      <header>
        <nav>
          <ul className={styles.navLinks}>
            <li className={styles.brand}>
              <h1>BookStore CMS</h1>
            </li>
            <li>
              <Link className={styles.links} to="/">BOOKS</Link>
            </li>
            <li>
              <Link className={styles.categories} to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        <FaUserCircle color="#0290ff" fontSize="12px" />
      </header>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
