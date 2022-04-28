import React, {useState} from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  const [tweet, setTweet] = useState();
  const [tweetAuthor, setTweetAuthor] = useState();
  const [tweetAnalysis, TweetAnalysis] = useState({});

  const handleSubmit = async (statusId) => {
    const result = await (await fetch(`/api/tweets/${statusId}`)).json();
    const {data, includes: {users}} = result;

    setTweet(data[0].text);
    setTweetAuthor(users[0]);

    const analysis = await fetch('/api/ibmWatson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tweet})
    })

    setTweetAnalysis(analysis)
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar handleSubmit={handleSubmit} description="Analyse a select tweet" placeholder="https://twitter.com/user/status/151458909249539">
          <TweetBox showProfile tweetText={tweet} username={tweetAuthor?.name} userImage={tweetAuthor?.profile_image_url} createdAt={tweetAuthor?.created_at}/>  
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet