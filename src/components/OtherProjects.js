import styles from '../styles/OtherProjects.module.css';
import Project from './Project';

const OtherProjects = () => {
  return (
    <div className={styles.OtherProjects}>
      <Project
      link='https://github.com/MagReda16/whoswhere'
      projectName='WhosWhere'
      projectDescription=" Refactored an existing code base to TypeScript as well as writing various reusable components and hooks. Created new data models and updated controllers and routes for new features."
      techStack={['React', 'JS', 'TS', 'CSS', 'Node.js', 'Mongo']}
      />
      <Project
      link='https://github.com/PhillipNguy/portfolioV2'
      projectName='This Website!'
      projectDescription="Designed, created, and animated a fully responsive website. Will also become a multipage site thanks to the use of reusable components."
      techStack={['React', 'JS',  'CSS', 'Framer Motion']}
      />
    </div>
  )
}

export default OtherProjects;