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
        <a href='https://github.com/PhillipNguy' target='_blank'>
        <motion.input
            className={stylesBtn.sideIcons}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.6 }}
            transition={{ type: 'tween', duration: 0.3 }}
            animate={{rotate:270}}
            type="image" src={require('../assets/github.png')}
            />
        </a>

        <a href='https://www.linkedin.com/in/phillipnguy/' target='_blank'>
        <motion.input
            className={stylesBtn.sideIcons}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.6 }}
            transition={{ type: 'tween', duration: 0.3 }}
            animate={{rotate:270}}
            type="image" src={require('../assets/linkedin.png')}
            />
        </a>

        <a href='https://www.instagram.com/xforgetfulphilx/' target='_blank'>
          <motion.input
            className={stylesBtn.sideIcons}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.6 }}
            transition={{ type: 'tween', duration: 0.3 }}
            animate={{rotate:270}}
            type="image" src={require('../assets/instagram.png')}
            />
        </a>
        <img className={styles.sideLineL} src={require('../assets/lineTop.png')} />
      </div>
      <div className={styles.sideRight}>
        <a href="mailto:nguyphillip@gmail.com"
        className={styles.sideText}
        >
          nguyphillip@gmail.com
        </a>
        <img className={styles.sideLine} src={require('../assets/lineTop.png')} />
      </div>
    </div>
  )
}

export default SideBars;