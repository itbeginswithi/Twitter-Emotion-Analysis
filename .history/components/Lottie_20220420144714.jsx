import React from 'react'
import {motion} from 'framer-motion';

const Lottie = ({lottieA}) => {
  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__animation}>
        <Lottie className={styles.analyseProfile__animation_lottie} options={animationOptions}/>
    </motion.div>
  )
}

export default Lottie