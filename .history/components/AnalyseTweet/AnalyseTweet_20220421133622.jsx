import React from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  return (
    <div id="analyseTweet" className={`${styles.analyseTweet} f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar />
    </div>
  )
}

export default AnalyseTweet