import React, {useState} from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  const [tweet, setTweet] = useState();
  const [tweetAuthor, setTweetAuthor] = useState();
  const [tweetAnalysis, setTweetAnalysis] = useState([]);

  //! check for input fields
  const handleSubmit = async (statusId) => {
    let fetchedTweet;
    try {
      fetchedTweet = await (await fetch(`/api/tweets/${statusId}`)).json(); 
      //! check if id exists
      const {data, includes: {users}} = fetchedTweet; 

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar handleSubmit={handleSubmit} description="Analyse a select tweet" placeholder="https://twitter.com/user/status/151458909249539">
          <TweetBox 
            showProfile 
            tweetText={tweet} 
            username={tweetAuthor?.name} 
            userImage={tweetAuthor?.profile_image_url} 
            createdAt={tweetAuthor?.created_at} 
            tweetAnalysis={tweetAnalysis}
          />  
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet