import styles from '../styles/Intro.module.css';
import stylesBtn from '../styles/buttons.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import { motion } from 'framer-motion';

const Intro = ({contactRef}) => {
  const { theme } = useContext(ThemeContext);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div className={styles.Intro}>
        <h3 className={styles.JapPhrase}>
          こんにちは はじめまして! (Hello, Nice to meet you!)
        </h3>
        <h1 className={styles.Name}>Phillip Nguy</h1>
        <h2 className={styles.SubHead}>Developer. Travler. Cinematographer.</h2>
        <div className={styles.bodyBox}>
          <p className={styles.Paragraph}>
            I’m a traveling software engineer that is based in California, but
            will often work remotely from Vietnam, Japan, and anywhere else that
            life may take me.
            <br/> <br/>
            Freedom and creativity reigns supreme, and I intend on using it to
            build innovative products that could provide a more sustainable
            future!
          </p>
        </div>
        <motion.button
            className={[stylesBtn.mainButton, stylesBtn.contact].join(' ')}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.1 }}
            transition={{ type: 'tween', duration: 0.1 }}
            onClick={() => scrollToSection(contactRef)}
            >Contact Me!</motion.button>
      </div>
      <img src={require('../assets/astronautlogo.webp')} className={styles.hero} />
      <img className={styles.cloud1} src={require('../assets/cloud2.png')} />
      <img className={styles.cloud2} src={require('../assets/cloud2.png')} />
    </div>
  );
};

export default Intro;
