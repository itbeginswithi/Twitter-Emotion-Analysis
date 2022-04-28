import React from 'react'
import {motion} from 'framer-motion';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';
import TweetBox from '../TweetBox/TweetBox';
import Searchbar from '../Searchbar/Searchbar';

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
    <div id="analyseProfile" className={`flex f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <Searchbar/>
    </div>
  )
}

export default ProfileSearch