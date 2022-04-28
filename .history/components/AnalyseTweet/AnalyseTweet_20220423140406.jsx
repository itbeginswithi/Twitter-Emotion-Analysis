import React, {useState} from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  const [tweet, setTweet] = useState();
  const [tweetAuthor, setTweetAuthor] = useState();

  const handleSubmit = async () => {
    const result = await (await fetch('/api/tweets')).json();
    console.log(result);
    const {data, includes: {users}} = result;
    setTweet(data[0].text);
    setTweetAuthor(users[0])
    console.log(users);
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar handleSubmit={handleSubmit} description="Analyse a select tweet" placeholder="https://twitter.com/status/15628625">
          <TweetBox showProfile tweetText={tweet} username={tweetAuthor?.username} userImage={} createdAt={tweetAuthor?.createdAt}/>  
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet