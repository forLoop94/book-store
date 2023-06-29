import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.links} to="/">BOOKS</Link>
          </li>
          <li>
            <Link className="links" to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
