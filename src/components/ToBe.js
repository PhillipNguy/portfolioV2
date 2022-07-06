import styles from '../styles/ToBe.module.css';
import stylesG from '../styles/App.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import ToSection from './ToSection';
import ToSectionBottom from './ToSectionBottom';

const ToBe = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toBe' />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionLeft}>
          <h2 className={styles.subHeading}>ようこそ! (Welcome!)</h2>
          <p className={styles.bioBox}>
            Hello! My name is Phillip and I fell in love with technology after the
            first Ironman movie back in 2008. I remember trying to makeshift my own
            J.A.R.V.I.S to open some apps, tell me the weather, and even play my own
            catchy theme song. Thus began my long and bug riddled journey towards
            becoming a developer!
            <br />
            <br />
            My studies in Environmental Science and Philosophy
            further fueled my love for learning and finally gave my code a purpose.
            After years of self-learning, I decided to take a rigourous
            software engineering bootcamp at Codeworks to solidify my knowledge. I am now ready for my next big adventure!
            <br/>
            <br/>
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className={styles.skillBox}>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>SQL & NoSQL</li>
            </ul>
          </div>
        </div>
        <div className={styles.pictureBox}>
          {/* <div className={styles.pictureFrame}/> */}
          <img src={require('../assets/portrait.jpeg')} className={styles.portrait}/>
        </div>
      </div>
      <div className={stylesG.bottomSection}>
        <ToSectionBottom/>
      </div>
    </div>
  );
};

export default ToBe;
