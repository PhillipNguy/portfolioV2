import styles from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import React, {useContext} from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../pages/App';

const SideBars = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.sidebars}>
       <div className={styles.sideLeft}>
       <motion.input
          className={stylesBtn.sideIcons}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.6 }}
          transition={{ type: 'tween', duration: 0.3 }}
          animate={{rotate:270}}
          type="image" src={require('../assets/github.png')}
          />
       <motion.input
          className={stylesBtn.sideIcons}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.6 }}
          transition={{ type: 'tween', duration: 0.3 }}
          animate={{rotate:270}}
          type="image" src={require('../assets/linkedin.png')}
          />
       <motion.input
          className={stylesBtn.sideIcons}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.6 }}
          transition={{ type: 'tween', duration: 0.3 }}
          animate={{rotate:270}}
          type="image" src={require('../assets/instagram.png')}
          />
        <img className={styles.sideLine} src={require('../assets/lineTop.png')} />
      </div>
      <div className={styles.sideRight}>
        <h4 className={styles.sideText}>nguyphillip@gmail.com</h4>
        <img className={styles.sideLine} src={require('../assets/lineTop.png')} />
      </div>
    </div>
  )
}

export default SideBars;