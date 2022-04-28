import React from 'react'
import Lottie from 'react-lottie'

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '..'

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