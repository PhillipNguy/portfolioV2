import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import { ThemeContext } from '../pages/App';
import HighlightPhrase from './HighlightPhrase.js';
import { motion } from 'framer-motion';

const NavLink = React.forwardRef((props, ref) => {
  const { refId, closeMobile } = props;
  const { theme } = useContext(ThemeContext);

  const scrollToSection = (elementRef) => {
    closeMobile();
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
    className={styles.link}
    id={styles[theme]}
    whileHover={{ scale: 1.4 }}
    // whileTap={{ scale: 0.4 }}
    transition={{ type: 'tween', duration: 0.1 }}
    onClick={() => scrollToSection(ref)}
      >
      <HighlightPhrase phrase={refId} />
    </motion.button>
  );
});

export default NavLink;
