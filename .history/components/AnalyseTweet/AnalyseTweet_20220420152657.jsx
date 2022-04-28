import React from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie'
import styles from './AnalyseTweet.module.scss'

const AnalyseTweet = () => {
  return (
    <div id="analyseTweet" className={`${styles.analyseTweet}`}>
        <LottieAnimation lottieJson={womenLottie}/>
    </div>
  )
}

export default AnalyseTweet