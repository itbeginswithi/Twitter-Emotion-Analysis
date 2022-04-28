import React from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar description="Analyse a tweet">
          <TweetBox/>
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet