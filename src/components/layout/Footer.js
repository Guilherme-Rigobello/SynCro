import { FaTiktok, FaFacebookMessenger, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebookMessenger />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaTiktok />
        </li>
      </ul>
      <p className={styles.copy_right}>
        {' '}
        License <span>MIT</span> | 2024 &copy;{' '}
      </p>
    </footer>
  );
}

export default Footer;
