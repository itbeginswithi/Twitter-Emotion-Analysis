import React from 'react'
import Lottie from 'react-lottie'
import {motion} from 'framer-motion';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'

const animationOptions = {
  loop: true, 
  autoplay: true, 
  animationData: manLottieJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const ProfileSearch = () => {
  return (
    <div id="analyseProfile" className={`${styles.analyseProfile} section-padding`}>
      <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1], scale: [0.5, 1]}} className={styles.analyseProfile__animation}>
        <Lottie className={styles.analyseProfile__animation_lottie} options={animationOptions}/>
      </motion.div>
 
      <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
        <h4>Search By profile or Tag</h4>
        <div className={styles.analyseProfile__searchBar_input}>
          <input type="text" placeholder="@profile or #tag"/>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSearch