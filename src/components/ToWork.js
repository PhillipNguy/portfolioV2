import styles from '../styles/ToWork.module.css';
import stylesBtn from '../styles/buttons.module.css';
import stylesG from '../styles/App.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';
import ToSectionBottom from './ToSectionBottom';
import Carousel from './Carousel'
import { motion } from 'framer-motion';
import { ThemeContext } from '../pages/App';



const ToWork = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toWork' />
      </div>
      <div className={styles.featuredProject}>
        <h2 className={styles.subHeading}>
        Featured Project</h2>
        <h1 className={styles.heading}>Built The Web App: Slice</h1>
        <Carousel slides={[
          require('../assets/sliceAlbum/slice.mp4'),
          require('../assets/sliceAlbum/slice01.png'),
          require("../assets/sliceAlbum/slice02.png"),
          require("../assets/sliceAlbum/slice03.png"),
          require("../assets/sliceAlbum/slice04.png"),
          require("../assets/sliceAlbum/slice05.png"),
          require("../assets/sliceAlbum/slice06.png"),
          require("../assets/sliceAlbum/slice07.png"),
          require("../assets/sliceAlbum/slice08.png"),
          require("../assets/sliceAlbum/slice09.png"),
          require("../assets/sliceAlbum/slice10.png"),
        ]}/>
        <ul className={styles.skillBox}>
          <li>TypeScript</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>Spoonacular API</li>
          <li>Heroku</li>
        </ul>
        <div className={styles.pBox}>
          <p>
          Designed and built Slice, a meal planning and budgeting app. Slice allows you to create a weekly meal plan based on a your budget, nutrion intake, and personal taste using the Spoonacular API. It will then generate a grocery list based on all the ingredients required for the recipes.
          </p>
          </div>
        <div className={styles.buttonBox}>
          <motion.input
          className={stylesBtn.Git}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.1 }}
          transition={{ type: 'tween', duration: 0.1 }}
          type="image" src={require('../assets/Vector.png')}
          />

          <motion.button
          className={[stylesBtn.mainButton, stylesBtn.TryButton].join(' ')}
          id={stylesBtn[theme]}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.1 }}
          transition={{ type: 'tween', duration: 0.1 }}
          >Try Now!</motion.button>
        </div>
      </div>
      <div className={stylesG.bottomSection}>
        <ToSectionBottom/>
      </div>
    </div>
  )
}

export default ToWork;