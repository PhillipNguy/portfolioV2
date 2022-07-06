import styles from '../styles/OtherProjects.module.css';
import stylesBtn from '../styles/buttons.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../pages/App';


const Project = (props) => {
  const theme = useContext(ThemeContext)
  const { link, projectName, projectDescription, techStack } = props;

  return (
    <motion.div
    className={styles.folder}
    whileHover={{scale: 1.1}}
    >
      <div className={styles.folderTopBar}>
        <img src={require('../assets/logos/folder.png')}/>
        <a href={link} target='_blank'>
          <motion.input
              className={stylesBtn.Git}
              id={stylesBtn[theme]}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'tween', duration: 0.1 }}
              type="image" src={require('../assets/logos/githubPink.png')}
              />
        </a>
      </div>
      <h2 className={styles.heading}>{projectName}</h2>
      <p className={styles.description}>{projectDescription}</p>
      <ul className={styles.list}>
        {techStack.map((name) => (
          <h1 className={styles.listItem}>{name}</h1>
        ))}
      </ul>
    </motion.div>
  )
}

export default Project;