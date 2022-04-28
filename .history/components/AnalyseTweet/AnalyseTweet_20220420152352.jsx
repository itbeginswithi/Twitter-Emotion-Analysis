import React from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie'

const AnalyseTweet = () => {
  return (
    <div id="analyseTweet">
        <LottieAnimation lottieJson={womenLottie}/>
    </div>
  )
}

export default AnalyseTweet