import styles from '../styles/App.module.css';
import '../styles/global.css';
import { createContext, useState } from 'react';
import { useRef } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Intro from '../components/Intro';
import ToBe from '../components/ToBe.js';
import ToLove from '../components/ToLove';
import ToWork from '../components/ToWork';
import ToContact from '../components/toContact';
import SideBars from '../components/SideBars'
import ThemeSwitch from '../components/ThemeSwitch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('night');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'day' ? 'night' : 'day'));
  };

  const toBe = useRef(null);
  const toLove = useRef(null);
  const toWork = useRef(null);
  const toContact = useRef(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.App} id={theme}>
        <SideBars/>
        <NavBar ref={{ toBe, toLove, toWork, toContact }} />
        {/* <ThemeSwitch /> */}
        <div className={styles.MainBody}>
          <Intro contactRef={toContact}/>
          <div ref={toBe}>
            <ToBe />
          </div>
          <div ref={toLove}>
            <ToLove />
          </div>
          <div ref={toWork}>
            <ToWork />
          </div>
          <div ref={toContact}>
            <ToContact />
          </div>
        </div>
        <div className={styles.creditBox}>
          <h4>Designed and Created by Phillip Nguy</h4>
          <h4>Design inspired by Brittany Chiang and Hero is from Google</h4>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
