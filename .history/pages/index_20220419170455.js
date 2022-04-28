import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import {motion} from 'framer-motion';

import styles from '../styles/Home.module.scss'
import {joy} from '../constants/emotionIcons';
import woman from '../assets/lottie/woman-twitter.json';


const animationOptions = { 
  loop: true,
  autoPlay: true,
  animationData: woman,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Home = () => {
  return (
    <>
     <motion.div  whileInView={{x: [-100, 0], opacity: [0, 1]}} className={styles.container}>
      <h1 className={styles.h1}>Hello world I&apos;ve come at last</h1>
      <Image src={joy} alt='happy'/>
      <div className={styles.lottie}>
        <Lottie options={animationOptions} isPaused={null} width={'25rem'} height="auto"/>
      </div>
     </motion.div>
    </>
  )
}

export default Home;