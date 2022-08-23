import styles from '../styles/ToWork.module.css';
import stylesBtn from '../styles/buttons.module.css';
import stylesG from '../styles/App.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';
import ToSectionBottom from './ToSectionBottom';
import Carousel from './Carousel';
import OtherProjects from './OtherProjects';
import { motion } from 'framer-motion';
import { ThemeContext } from '../pages/App';
import { useNavigate } from 'react-router-dom';



const ToWork = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

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
          require('../assets/sliceAlbum/slice01.jpg'),
          require("../assets/sliceAlbum/slice02.jpg"),
          require("../assets/sliceAlbum/slice03.jpg"),
          require("../assets/sliceAlbum/slice04.jpg"),
          require("../assets/sliceAlbum/slice05.jpg"),
          require("../assets/sliceAlbum/slice06.jpg"),
          require("../assets/sliceAlbum/slice07.jpg"),
          require("../assets/sliceAlbum/slice08.jpg"),
          require("../assets/sliceAlbum/slice09.jpg"),
          // require("../assets/sliceAlbum/slice10.jpg"),
        ]}/>
        <div className={styles.skillLine}>
          <ul className={styles.skillBox}>
            <li>TypeScript</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
          <ul className={styles.skillBox}>
            <li>MongoDB</li>
            <li>Spoonacular API</li>
            <li>Heroku</li>
            </ul>
        </div>
        <div className={styles.pBox}>
          <p>
          Designed and built Slice, a meal planning and budgeting progressive web app. Slice allows you to create a weekly meal plan based on a your budget, nutrion intake, and personal taste using the Spoonacular API. It will then generate a grocery list based on all the ingredients required for the recipes.
          </p>
          </div>
        <div className={styles.buttonBox}>
          <a href='https://github.com/MagReda16/slice' target="_blank">
            <motion.input
            className={stylesBtn.Git}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'tween', duration: 0.1 }}
            type="image" src={require('../assets//logos/githubBlueCircle.png')}
            />
          </a>

          <a href='https://slice-henna.vercel.app/' target='_blank'>
            <motion.button
            className={[stylesBtn.mainButton, stylesBtn.TryButton].join(' ')}
            id={stylesBtn[theme]}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'tween', duration: 0.1 }}
            >Try Now!</motion.button>
          </a>

        </div>
      </div>
      <h1 className={styles.heading}>Other Projects</h1>
      <OtherProjects/>
      <div className={stylesG.bottomSection}>
        <ToSectionBottom/>
      </div>
    </div>
  )
}

export default ToWork;