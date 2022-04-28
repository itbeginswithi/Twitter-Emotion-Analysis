import React from 'react'
import {motion} from 'framer-motion';
import {BsSearch} from 'react-icons/bs';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';

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
    <div id="analyseProfile" className={`${styles.analyseProfile} f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
        <h4>Search By profile or Tag</h4>
        <div className={styles.analyseProfile__searchBar_input}>
          <input  className{styles.input} type="text" placeholder="@profile or #tag"/>
          <button type="submit" onClick={() => {}}>
            <BsSearch/>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSearch