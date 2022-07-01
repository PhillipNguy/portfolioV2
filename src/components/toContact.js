import styles from '../styles/ToWork.module.css';
import stylesG from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';
import ToSectionBottom from './ToSectionBottom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../pages/App';

const ToContact = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toContact' />
      </div>
      <div className={styles.contactContent}>
        <h1 className={styles.heading}>Let's Connect</h1>
        <h2 className={styles.contactMsg}>I am currently open to new opportunities as well as my next adventure. So whether it’s a potental job match or you find yourself traveling in the same country, let’s have a chat!</h2>
        <a href='mailto:nguyphillip@gmail.com'>
          <motion.button
            className={[stylesBtn.mainButton, stylesBtn.contactSecondary].join(' ')}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.1 }}
            transition={{ type: 'tween', duration: 0.1 }}
            >Contact</motion.button>
        </a>
      </div>
      <div className={stylesG.bottomSection}>
        <ToSectionBottom/>
      </div>
    </div>
  )
}

export default ToContact;