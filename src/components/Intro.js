import styles from '../styles/Intro.module.css';
import stylesBtn from '../styles/buttons.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import { motion } from 'framer-motion';

const HeroBox = {
  hidden: {
    x: '200vw'
  },
  visible: {
    x: '0',
    transition: {
      type: 'tween',
      duration: .1,
    },
    animate: {
      rotate:270,
    }
  }
}

const HeroSway = {
  hidden: {
    x: '0',
  },
  visible: {
    x: '1vw',
    transition: {
      duration: 1.2,
      type:'tween',
      yoyo: Infinity
    }
  }
}

const CloudSway1 = {
  hidden: {
    x: '1vw',
  },
  visible: {
    x: '0',
    transition: {
      duration: 1,
      type:'tween',
      yoyo: Infinity,
    }
  },
  visible2: {
    x: '0',
    transition: {
      duration: 1,
      type:'tween',
      yoyo: Infinity,
      delay: .3,
    }
  }
}

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
      <motion.div
        variants={HeroBox}
        // initial='hidden'
        // animate='visible'
      >
        <motion.img
        variants={HeroSway}
        initial='hidden'
        animate='visible'
        src={require('../assets/astronautlogo.webp')} className={styles.hero} />
        <motion.img
        variants={CloudSway1}
        initial='hidden'
        animate='visible2'
        className={styles.cloud1} src={require('../assets/cloud2.png')} />
        <motion.img
        variants={CloudSway1}
        initial='hidden'
        animate='visible'
        className={styles.cloud2} src={require('../assets/cloud2.png')} />
        </motion.div>
    </div>
  );
};

export default Intro;
