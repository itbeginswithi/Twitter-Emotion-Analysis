import React from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie'
import s

const AnalyseTweet = () => {
  return (
    <div id="analyseTweet" className={`${styles.analyseTweet}`}>
        <LottieAnimation lottieJson={womenLottie}/>
    </div>
  )
}

export default AnalyseTweet