import { Route, Routes, Link } from 'react-router-dom';
import styles from './styles/app.module.css';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
