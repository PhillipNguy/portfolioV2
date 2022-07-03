import styles from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import '../styles/global.css';
import { createContext, useState } from 'react';
import { useRef, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Intro from '../components/Intro';
import ToBe from '../components/ToBe.js';
import ToLove from '../components/ToLove';
import ToWork from '../components/ToWork';
import ToContact from '../components/toContact';
import SideBars from '../components/SideBars'
import { Loading } from '../components/Loading';
// import ThemeSwitch from '../components/ThemeSwitch';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useAnimateOnInView from '../components/hooks/useAnimateOnInView';


export const ThemeContext = createContext(null);

const BodyVariant = {
    rInitial: {
      x: '200vw'
    },
    rAnimate: {
      x: 0
    },
    lInitial: {
      x: '-200vw'
    },
    lAnimate: {
      x: 0
    },
    transition: {
      type:'spring',
      duration: 1,
      bounce: 0.3,
    },
}

function App() {
  const [theme, setTheme] = useState('night');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'day' ? 'night' : 'day'));
  };

  const toBe = useRef(null);
  const toLove = useRef(null);
  const toWork = useRef(null);
  const toContact = useRef(null);

  // const { ref, inView } = useInView();
  // const { ref2, inView2 } = useInView();
  // const { ref3, inView3 } = useInView();
  // const { ref4, inView4 } = useInView();

  // const Animate = useAnimation();
  // // const Animate2 = useAnimation();

  // useEffect(() => {
  //   if(inView) {
  //     Animate.start({
  //       x: 0,
  //       transition: {
  //         type: 'spring', duration: 1, bounce: 0.3
  //       }
  //     })
  //   }
  //   if(!inView) {
  //     Animate.start({x: '-100vw'})
  //   }
  // }, [inView])


  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const useAnimateOnInView = () => {
    const { ref, inView } = useInView();
    useEffect(() => {

        if (inView && ref===toBeRef) {
          controls.start({
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, bounce: 0.3
            }
          });
        }
        if (!inView && ref===toBeRef) {
          controls.start({x: '-100vw'});
        }

        if (inView && ref===toLoveRef) {
          controls2.start({
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, bounce: 0.3
            }
          });
        }
        if (!inView && ref===toLoveRef) {
          controls2.start({x: '-100vw'});
        }

        if (inView && ref===toWorkRef) {
          controls3.start({
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, bounce: 0.3
            }
          });
        }
        if (!inView && ref===toWorkRef) {
          controls3.start({x: '-100vw'});
        }


        if (inView && ref===toContactRef) {
          controls4.start({
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, bounce: 0.3
            }
          });
        }
        if (!inView && ref===toContactRef) {
          controls4.start({x: '-100vw'});
        }

      }, [controls, inView]);


     return { ref };
  }

  const { ref: toBeRef } = useAnimateOnInView();
  const { ref: toLoveRef } = useAnimateOnInView();
  const { ref: toWorkRef } = useAnimateOnInView();
  const { ref: toContactRef } = useAnimateOnInView();

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  }, [])


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       {/* {isLoading===true ?
        pass : */}
        <div className={styles.App} id={theme}>
          <SideBars/>
          <NavBar ref={{ toBe, toLove, toWork, toContact }} />
          {/* <ThemeSwitch /> */}
          <div className={styles.MainBody}>
            <Intro contactRef={toContact}/>


            <div ref={toBeRef}>
              <motion.div ref={toBe}
                animate={controls}
              >
                <ToBe />
              </motion.div>
            </div>


            <div ref={toLoveRef}>
              <motion.div ref={toLove}
              animate={controls2}
              >
                <ToLove />
              </motion.div>
            </div>


            <div ref={toWorkRef}>
              <motion.div ref={toWork}
              animate={controls3}
              >
                <ToWork />
              </motion.div>
            </div>


            <div ref={toContactRef}>
              <motion.div ref={toContact}
              animate={controls4}
              >
                <ToContact />
              </motion.div>
            </div>

          </div>
          <div className={styles.iconBox}>
            <a href='https://github.com/PhillipNguy' target='_blank'>
            <motion.input
                className={stylesBtn.Icons}
                id={stylesBtn[theme]}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: 'tween', duration: 0.3 }}
                type="image" src={require('../assets/logos/githubGreyCircle.png')}
                />
            </a>

            <a href='https://www.linkedin.com/in/phillipnguy/' target='_blank'>
            <motion.input
                className={stylesBtn.Icons}
                id={stylesBtn[theme]}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: 'tween', duration: 0.3 }}
                type="image" src={require('../assets/logos/linkedin.png')}
                />
            </a>

            <a href='https://www.instagram.com/xforgetfulphilx/' target='_blank'>
              <motion.input
                className={stylesBtn.Icons}
                id={stylesBtn[theme]}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: 'tween', duration: 0.3 }}
                type="image" src={require('../assets/logos/instagram.png')}
                />
            </a>
          </div>
          <div className={styles.creditBox}>
            <h4>Designed and Created by Phillip Nguy</h4>
            <h4>Design inspired by Brittany Chiang and Hero is from Google</h4>
          </div>
        </div>
        {/* } */}
    </ThemeContext.Provider>
  );
}

export default App;
