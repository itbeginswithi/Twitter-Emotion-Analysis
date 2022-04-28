import React from 'react'
import {motion} from 'framer-motion';

const Lottie = ({lottieJson, classes}) => {

    
  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={classes}>
        <Lottie className={styles.analyseProfile__animation_lottie} options={animationOptions}/>
    </motion.div>
  )
}

export default Lottie