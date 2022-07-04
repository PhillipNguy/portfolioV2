import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Intro.module.css'

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
    }
  }
}
export const Loading = () => {
  return (
    <div>
       <motion.img
        variants={HeroSway}
        initial='hidden'
        animate='visible'
        src={require('../assets/astronautlogo.webp')} className={styles.heroLoading} />
        <motion.img
        variants={CloudSway1}
        initial='hidden'
        animate='visible2'
        className={styles.cloud1Loading} src={require('../assets/cloud2.png')} />
        <motion.img
        variants={CloudSway1}
        initial='hidden'
        animate='visible'
        className={styles.cloud2Loading} src={require('../assets/cloud2.png')} />
    </div>
  )
}
