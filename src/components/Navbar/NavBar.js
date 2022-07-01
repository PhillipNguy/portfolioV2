import React, { useContext, useState, useEffect } from 'react';
import styles from '../../styles/App.module.css';
import stylesBtn from '../../styles/buttons.module.css';
import { ThemeContext } from '../../pages/App';
import NavLink from '../NavLink.js';
import {Nav, Bars, X, NavMenu} from './NavbarElements';

import { motion } from 'framer-motion';
const variants = {
  open: { opacity: 1, x: 0},
  closed: { opacity: 0, x: '100%'},
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




  return (
    <Nav className={styles.topBar}>
      <img src={require('../../assets/logo.png')} className={styles.logo}/>
      {click ? <X onClick={handleClick}/> : <Bars onClick={handleClick}/>}
      {/* <motion.nav
      animate = {click ? 'open' : 'closed'}
      variants={variants}
      transition={{duration: 0.3}}
      >
        <NavLink ref={ref.toBe} refId='toBe' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toLove} refId='toLove' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toWork} refId='toWork' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toContact} refId='toContact' closeMobile={closeMobileMenu} />
        <button className={stylesBtn.mainButton} id={stylesBtn[theme]}>
          Resume
        </button>
      </motion.nav> */}

      <NavMenu className={click ? [styles.navMenu, styles.active].join(' ') : styles.navMenu}>
        <NavLink ref={ref.toBe} refId='toBe' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toLove} refId='toLove' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toWork} refId='toWork' closeMobile={closeMobileMenu} />
        <NavLink ref={ref.toContact} refId='toContact' closeMobile={closeMobileMenu} />
        <a href={require('../../assets/PhillipNguy_Resume.pdf')} download='PhillipNguy_Resume.pdf'>
          <motion.button
          className={stylesBtn.mainButton}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.1 }}
          transition={{ type: 'tween', duration: 0.1 }}
          >
            Resume
          </motion.button>
        </a>
      </NavMenu>
    </Nav>
  );
});

export default NavBar;
