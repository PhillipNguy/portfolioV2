import React, { useContext, useState, useEffect } from 'react';
import styles from '../../styles/App.module.css';
import stylesNav from '../../styles/NavBar.module.css';
import stylesBtn from '../../styles/buttons.module.css';
import { ThemeContext } from '../../pages/App';
import NavLink from '../NavLink.js';
import {Nav, Bars, X, NavMenu} from './NavbarElements';

import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  open: { opacity: 1, x: 0},
  closed: { opacity: 0, x: '100%'},
}

const dropIn = {
  hidden: {
    x:'200vw',
    opacity: 0,
  },
  visible: {
    x:'0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type:'spring',
      damping: 100,
      stiffness: 500,
    }
  },
  exit: {
    x:'200vw',
    opacity: 0,
  },
}

const NavBar = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const handleClick = () => {
    setClick(!click)
    if(click) {
      document.body.style.overflow='unset';
    } else {
      document.body.style.overflow='hidden';
    }
  };
  const closeMobileMenu = () => {
    setClick(false);
    document.body.style.overflow='unset';
  }

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    // return {
    //   window.removeEventListener('resize', showButton);
    // }
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current,
      behavior: 'smooth',
    });
  };



  return (
    <Nav className={styles.topBar}>
      <button className={stylesNav.logoButton} onClick={()=> scrollToSection(ref.intro)}>
        <img src={require('../../assets/logo.png')} className={stylesNav.logo} />
      </button>


      {click ? <X onClick={handleClick} className={stylesNav.button}/>
      : <Bars onClick={handleClick} className={stylesNav.button}/>}
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=> null}>
        {click && <motion.div
          className={stylesNav.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClick}
        >
          <motion.div
            className={stylesNav.modal}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            <NavMenu className={[styles.navMenu, styles.active].join(' ')}>
              <NavLink ref={ref.toBe} refId='toBe' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toLove} refId='toLove' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toWork} refId='toWork' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toContact} refId='toContact' closeMobile={closeMobileMenu} />
              <a href={require('../../assets/PhillipNguy_Resume.pdf')} download='PhillipNguy_Resume.pdf'>
                <motion.button
                className={[stylesBtn.mainButton, stylesBtn.resume].join(' ')}
                id={stylesBtn[theme]}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.1 }}
                transition={{ type: 'tween', duration: 0.1 }}
                >
                  Resume
                </motion.button>
              </a>
            </NavMenu>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
      {!click &&  <NavMenu className={click ? [styles.navMenu, styles.active].join(' ') : styles.navMenu}>
              <NavLink ref={ref.toBe} refId='toBe' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toLove} refId='toLove' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toWork} refId='toWork' closeMobile={closeMobileMenu} />
              <NavLink ref={ref.toContact} refId='toContact' closeMobile={closeMobileMenu} />
              <a href={require('../../assets/PhillipNguy_Resume.pdf')} download='PhillipNguy_Resume.pdf'>
                <motion.button
                className={stylesBtn.mainButton}
                id={stylesBtn[theme]}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'tween', duration: 0.1 }}
                >
                  Resume
                </motion.button>
              </a>
            </NavMenu>}
    </Nav>
  );
});

export default NavBar;
