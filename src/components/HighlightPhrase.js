import { useContext } from 'react';
import styles from '../styles/App.module.css';
import { ThemeContext } from '../pages/App';

const HighlightPhrase = (props) => {
  const { theme } = useContext(ThemeContext);

  const { phrase } = props;

  return (
    <div>
      <span className={styles.highlight} id={styles[theme]}>
        .
      </span>
      <span>{phrase}</span>
      <span className={styles.highlight} id={styles[theme]}>
        ()
      </span>
    </div>
  );
};

export default HighlightPhrase;
