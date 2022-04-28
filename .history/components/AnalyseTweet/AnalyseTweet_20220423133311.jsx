import React, {useState} from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  const [tweet, setTweet] = useState()

  const handleSubmit = async () => {
    const result = await (await fetch('/api/tweets')).json();
    const fetchedTweet = result.data[0];
    setTweet(fetchedTweet);
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar description="Analyse a select tweet" placeholder="https://twitter.com/status/15628625">
          <TweetBox showProfile tweetText={tweet}/>
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet