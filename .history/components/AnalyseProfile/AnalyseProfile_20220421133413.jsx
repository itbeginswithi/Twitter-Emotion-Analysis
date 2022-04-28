import React from 'react'
import {motion} from 'framer-motion';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';
import TweetBox from '../TweetBox/TweetBox';

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
      <SearchBar>
    </div>
  )
}

export default ProfileSearch