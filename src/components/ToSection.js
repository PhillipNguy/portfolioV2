import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import styles from '../styles/App.module.css';

const ToSection = (props) => {
  const { type } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.sectionTop}>
      <span
        className={[styles.highlight, styles.sectionHighlight].join(' ')}
        id={styles[theme]}
      >
        .
      </span>
      <span className={styles.sectionMain} id={styles[theme]}>
        {type}
      </span>
      <span
        className={[styles.highlight, styles.sectionHighlight].join(' ')}
        id={styles[theme]}
      >
        ()
      </span>
      <div className={styles.sectionBox}>
           <span id={styles[theme]} className={[styles.highlight, styles.sectionHighlight].join(' ') }>&#123;</span>
          <img src={require('../assets/lineTop.png')}
          className={styles.line}/>
      </div>
    </div>
  );
};

export default ToSection;
