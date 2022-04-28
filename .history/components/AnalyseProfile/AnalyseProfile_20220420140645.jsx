import React from 'react'
import Lottie from 'react-lottie'

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'

const animationOptions = {
  
}

const ProfileSearch = () => {
  return (
    <div id="analyseProfile" className={styles.analyseProfile}>
      <div className={styles.analyseProfile__animation}>
        <Lottie options={animationOptions} />
      </div>

      <div className={styles.analyseProfile__searchBar}>

      </div>
    </div>
  )
}

export default ProfileSearch