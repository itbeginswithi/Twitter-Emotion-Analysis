import React, {useState} from 'react'

import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import styles from './AnalyseTweet.module.scss';

const AnalyseTweet = () => {
  const [tweet, setTweet] = useState();
  const [fetchedTweet, setFetchedTweet] = useState()
  const [tweetAuthor, setTweetAuthor] = useState();
  const [tweetAnalysis, setTweetAnalysis] = useState([]);

  //! check for input fields
  const handleSubmit = async (statusId) => {
    // let fetchedTweet;
    // fetchedTweet = await (await fetch(`/api/tweets/${statusId}`)).json();
    await fetch(`/api/tweets/${statusId}`)
      .then(res => {
        if(!res.ok) {
          return console.log(e)
        }
      })
      .then(tweetData => setFetchedTweet(tweetData))
      .catch(error => console.log(error)) 
    //! check if id exists
    //! check if twitter api works

    const {data, includes: {users}} = fetchedTweet; 
    setTweet(data[0].text);
    setTweetAuthor(users[0]);
    
    //Analyse the tweet
    const analysis = await (await fetch('/api/ibmWatson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //didn't use the tweet state instead of data[0]
      //for some reason using the tweet state requires clicking the search btn twice.
      body: JSON.stringify({tweet: data[0]?.text}) 
    })).json();
    
    console.log(tweetAnalysis);
    setTweetAnalysis(analysis);
    //! dipatch error for twitter api errors
    //! dipatch error for IBM api errors
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