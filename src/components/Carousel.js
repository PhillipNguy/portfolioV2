import React, { useState, useContext } from 'react';
import styles from '../styles/carousel.module.css';
import stylesBtn from '../styles/buttons.module.css';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ThemeContext } from '../pages/App';

const Carousel = ({slides}) => {
  const { theme } = useContext(ThemeContext)
  const [position, setPosition] = useState(0);

  const onRight = () => {
    if (position < slides.length-1) {
      setPosition(position+1)
    }
  }

  const onLeft = () => {
    if (position > 0) {
      setPosition(position-1)
    }
  }

  const handleSwipe = useSwipeable({
    onSwiped: (dir) => {
      dir.dir === 'Right' ? onLeft() : onRight();
    }
  });


  return (
    <div className={styles.box}>
      <div className={styles.buttonBox}>
      <motion.button
        className={[stylesBtn.mainButton, stylesBtn.traversal].join(' ')}
        id={stylesBtn[theme]}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.1 }}
        transition={{ type: 'tween', duration: 0.1 }}
        onClick={onLeft}
        >
          &lt;&lt;
        </motion.button>
        <motion.button
        className={[stylesBtn.mainButton, stylesBtn.traversal].join(' ')}
        id={stylesBtn[theme]}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.1 }}
        transition={{ type: 'tween', duration: 0.1 }}
        onClick={onRight}
        >
          &gt;&gt;
        </motion.button>
      </div>
      <div
      {...handleSwipe}
      className={styles.row}>
        {
          slides.map((url, index) => (
          <motion.div className={styles.container}
          key={index}
          initial={{scale: 0, rotation: -180}}
          animate={{scale: index===position?1:0.7, rotation: 0,
          left: `${(index-position) * 30+12.5}vw`
          }}
          transition={{type:'spring', stiffness: 260, damping: 20,}}
          >
            {index===0 ?
            <video src={url} controls
            className={[styles.video].join(' ')}
            /> : <img src={url} />}
          </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Carousel;