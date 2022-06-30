import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import styles from '../styles/App.module.css';

const ToSectionBottom = () => {
  const { theme } = useContext(ThemeContext);

  return (

    <div className={styles.sectionBox}>
      <img src={require('../assets/lineBottom.png')}
      className={styles.line}/>
      <span id={styles[theme]} className={[styles.highlight, styles.sectionHighlight].join(' ') }>&#125;</span>
    </div>
  );
};

export default ToSectionBottom;
