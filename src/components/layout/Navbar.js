import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // FaTimes para o ícone "X"
import { useState } from 'react';
import styles from './Navbar.module.css';

import Container from './Container';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.logo} to='/'>
          <h2>
            Syn<span className={styles.ye_color}>Cro.</span>
          </h2>
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/projects'>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
        </ul>

        <div className={styles.burguer} onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className={styles.icon} /> 
          ) : (
            <FaBars className={styles.icon} />  
          )}
        </div>

        <div className={`${styles['menu-box']} ${isMenuOpen ? styles.open : ''}`}>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projetos</Link>
          <Link to='/contact'>Contato</Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
