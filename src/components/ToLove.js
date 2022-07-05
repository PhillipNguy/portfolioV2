import styles from '../styles/ToLove.module.css';
import stylesG from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import ToSection from './ToSection';
import ToSectionBottom from './ToSectionBottom';
import { useContext } from 'react';
import { ThemeContext } from '../pages/App';


const ToLove = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toLove' />
      </div>
      <div className={styles.hobbyGroup}>
        <div className={styles.hobbiesSection}>
          <div className={styles.leftSide}>
            <h2 className={styles.subHeading}>
            Anime & Volleyball</h2>
            <h1 className={styles.heading}>Have You Seen Haikyu?</h1>
            <div className={styles.pBox}>
              <p className={styles.paragraph}>
              Through its unique method of storytelling, Anime can make things exciting, in a way that I can only dream of as a cinematagrapher.
              <br/> <br/>
              One show, Haiyku even introdueced me to volleyball. Although my serves and spikes are not consistent yet, nothing will beat the feeling of smashing the ball and it staying in!
              </p>
              </div>
          </div>
          <img src={require('../assets/giphy.gif')} className={styles.image}/>
        </div>
        <div className={[styles.hobbiesSection, styles.hobbiesSectionRight].join(' ')}>
          <img src={require('../assets/muiNe.png')} className={[styles.image, styles.imageLarger, styles.imageLeft].join(' ')}/>
          <div className={styles.rightSide}>
            <h2 className={[styles.subHeading, styles.textRight].join(' ')}>
            Traveling & Photography</h2>
            <h1 className={[styles.heading, styles.textRight].join(' ')}>Life Should Be Savored</h1>
            <div className={styles.pBox}>
              <p className={styles.paragraph}>
              Working remotely has been such a blessing, as it has allowed me to live wherever I want. Fully immersing myself within a culture is totally different from just visiting as a tourist. Whether it’s a weekend trip or just finding a new cafe, this mental shift is exactly what drives me to constantly evolve as a developer.
              <br/> <br/>
              Currently bouncing around US, Vietnam, and Japan. (Hopefully Europe and South Korea in the future!)
              </p>
              </div>
              <div className={styles.buttonBox}>
                <h1>Coming Soon</h1>
                <button id={stylesBtn[theme]} className={[stylesBtn.mainButton, stylesBtn.Portfolio].join(' ')}>Travel Blog</button>
              </div>
              <div className={styles.buttonBox}>
                <h1>Coming Soon</h1>
                <button id={stylesBtn[theme]} className={[stylesBtn.mainButton, stylesBtn.Portfolio].join(' ')}>Portfolio</button>
              </div>
          </div>
        </div>
        <div className={[styles.hobbiesSection, styles.lastHobbieSection].join(' ')}>
          <div className={styles.leftSide}>
            <h2 className={styles.subHeading}>
            Philosophy, Environmental Science, & Japanese </h2>
            <h1 className={styles.heading}>The Love Of Learning</h1>
            <div className={styles.pBox}>
              <p className={styles.paragraph}>
              I love Philosophy because it pushes me to constantly question my own assumptions and logically check their validity. Ecology has taught me how intricately interconnected everything is and that every solution will have various reactions. Lastly, I love learning Japanese because it's a beautiful language that allows me to learn from people with a completely opposite culture and perpspective from which I am accustomed to.
              </p>
              </div>
          </div>
          <img src={require('../assets/japanNature.png')} className={[styles.image, styles.imageLarger].join(' ')}/>
        </div>
      </div>
      <div className={stylesG.bottomSection}>
        <ToSectionBottom/>
      </div>
    </div>
  )
}

export default ToLove;