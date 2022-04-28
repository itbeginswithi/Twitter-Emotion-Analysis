import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import styles from './AnalyseTweet.module.scss';
import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import { tweetsActions } from '../../store/slices/tweets';

const AnalyseTweet = () => {
  const dispatch = useDispatch();
  const {display: displayTweet} = useSelector(state => state.tweets);
  const [tweet, setTweet] = useState();
  const [tweetAuthor, setTweetAuthor] = useState();
  const [tweetAnalysis, setTweetAnalysis] = useState([]);

  //! check for input fields
  const handleSubmit = async (statusId) => {
    if(displayTweet) dispatch(tweetsActions.hideTweetBox());

    const fetchedTweet = await (await fetch(`/api/tweets/${statusId}`)).json();
    
    //! check if twitter api works

    if(!fetchedTweet){
      // fetchedTweet is undefined because auth token is wrong
      //! dispatch error message (somethings happened, try again soon)
      return;
    }

    if(fetchedTweet?.errors){
      //! check if id exists
      console.log(fetchedTweet.errors)
      return;
    }

    const {data, includes: {users}} = fetchedTweet; 
    setTweet(data[0].text);
    setTweetAuthor(users[0]);
    dispatch(tweetsActions.displayTweetBox());
    
    //Analysing the tweet
    const analysis = await (await fetch('/api/ibmWatson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //didn't use the tweet state instead of data[0]
      //for some reason using the tweet state requires clicking the search btn twice.
      body: JSON.stringify({tweet: data[0]?.text}) 
    })).json();

    //! dipatch error for IBM api errors
    if(analysis?.message){
      //       {message: {…}}
      // message:
      // body: "{\"errorCode\":\"BXNIM0415E\",\"errorMessage\":\"Provided API key could not be found\",\"context\":{\"requestId\":\"NGY0YzU-88ca785172cb4c9383c094de18904236\",\"requestType\":\"incoming.Identity_Token\",\"userAgent\":\"axios/0.26.1\",\"url\":\"https://iam.cloud.ibm.com\",\"instanceId\":\"iamid-7.4-13369-632ad15-855b6b9f8d-4f4c5\",\"threadId\":\"1f238a\",\"host\":\"iamid-7.4-13369-632ad15-855b6b9f8d-4f4c5\",\"startTime\":\"25.04.2022 14:22:47:700 UTC\",\"endTime\":\"25.04.2022 14:22:47:795 UTC\",\"elapsedTime\":\"95\",\"locale\":\"en_US\",\"clusterName\":\"iam-id-prod-eu-de-fra02\"}}"
      // code: 400
      // headers: {x-content-type-options: 'nosniff', transaction-id: 'NGY0YzU-88ca785172cb4c9383c094de18904236', x-request-id: '61d74a6d-f50c-476e-b486-bb981020bf62', x-correlation-id: 'NGY0YzU-88ca785172cb4c9383c094de18904236', cache-control: 'no-cache, no-store, must-revalidate', …}
      // message: "Access is denied due to invalid credentials."
      // name: "Bad Request"
      // status: 400
      // statusText: "Bad Request"
    }

    setTweetAnalysis(analysis);
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar handleSubmit={handleSubmit} searchByStatus description="Analyse a select tweet" placeholder="https://twitter.com/user/status/151458909249539">
          {
            displayTweet && (
              <TweetBox 
                showProfile 
                tweetText={tweet} 
                username={tweetAuthor?.name} 
                userImage={tweetAuthor?.profile_image_url} 
                createdAt={tweetAuthor?.created_at} 
                tweetAnalysis={tweetAnalysis}
              />  
            )
          }
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet