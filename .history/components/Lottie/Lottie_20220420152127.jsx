import React from 'react'
import {motion} from 'framer-motion';

import styles from './Lottie.module.scss';

const Lottie = ({lottieJson}) => {

  const animationOptions = {
    loop: true,
    autoplay: true,
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