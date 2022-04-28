import React from 'react'
import {motion} from 'framer-motion';
import Lottie from 'react-lottie';

import styles from './Lottie.module.scss';

const LottieAnimation = ({lottieJson}) => {

  const animationOptions = {
    loop: true,
    autoplay: true,
    duration
    animationData: lottieJson,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }  

  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__animation}>
        <Lottie className={styles.analyseProfile__animation_lottie} options={animationOptions}/>
    </motion.div>
  )
}

export default LottieAnimation