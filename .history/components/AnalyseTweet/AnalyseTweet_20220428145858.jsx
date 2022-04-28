import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import styles from './AnalyseTweet.module.scss';
import womenLottie from '../../assets/lottie/woman-twitter.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import TweetBox from '../TweetBox/TweetBox';
import { tweetsActions } from '../../store/slices/tweets';
import Error from '../Error/Error';

const AnalyseTweet = () => {
  const dispatch = useDispatch();
  const {displayTweetBox, error} = useSelector(state => state.tweetBox);
  
  const [analysisError, setAnalysisError] = useState(null);
  const [fetchingAnalysis, setFetchingAnalysis] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tweetText, setTweetText] = useState('');
  const [tweetAuthor, setTweetAuthor] = useState({});

  //! check for input fields
  const handleSubmit = async (statusId) => {
    // dispatch(tweetsActions.setIsLoading(true));
    setIsLoading(true);

    const fetchedTweet = await (await fetch(`/api/tweets/${statusId}`)).json();

    if(!fetchedTweet || fetchedTweet === undefined){
      // fetchedTweet is undefined because auth token is wrong
      // dispatch(tweetsActions.setIsLoading(false));
      setIsLoading(false);
      dispatch(tweetsActions.setError({
        message: 'The twitter api service is not available, try again later.'
      }));
      return;
    }

    if(fetchedTweet?.errors){
      // Wrong status Id
      const errorMessage = fetchedTweet.errors[0].message;

      if(errorMessage === undefined || errorMessage.includes('ids')) {
        errorMessage = 'No tweet was found with that id.'
      }

      dispatch(tweetsActions.setError({message: errorMessage}));
 
      dispatch(tweetsActions.displayTweetBox(false));
      
      // dispatch(tweetsActions.setTweetData({
      //   tweetText: '', 
      //   tweetAuthor: {},
      // }));
      setTweetText('');
      setTweetAuthor({})

      setIsLoading(false);
      // dispatch(tweetsActions.setIsLoading(false));
      return;
    }
    
    if(error) dispatch(tweetsActions.setError({message: ''}));
    const {data, includes: {users}} = fetchedTweet;

    setTweetText(data[0].text);
    setTweetCreatedAt(data[0].created_at);
    setTweetAuthor(users[0]);
    
    dispatch(tweetsActions.displayTweetBox(true));
    // dispatch(tweetsActions.setTweetData({
    //   tweetText: data[0].text, 
    //   createdAt: data[0].created_at,
    //   tweetAuthor: users[0],
    // }));
    // dispatch(tweetsActions.setIsLoading(false));
    setIsLoading(false)
    
    s
    dispatch(tweetsActions.fetchingAnalysis(true));
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
      dispatch(tweetsActions.fetchingAnalysis(false));

      const message = analysis.message.message;
      setAnalysisError(message);
      
      return;
    }
    
    dispatch(tweetsActions.fetchingAnalysis(false));
    dispatch(tweetsActions.setTweetAnalysis(analysis));
  }

  return (
    <div id="analyseTweet" className={`flex f-height section-padding`}>
        <LottieAnimation lottieJson={womenLottie}/>
        <Searchbar handleSubmit={handleSubmit} searchByStatus description="Analyse a select tweet" placeholder="https://twitter.com/user/status/151458909249539">
          {
            error && (
              <Error message={error}/>
            )   
          }
          {
            displayTweetBox && (
              <TweetBox 
                showProfile 
                closeTweetBox 
                analysisError={analysisError}
                fetchingAnalysis={fetchingAnalysis}
                tweetText={data[0].text}
                createdAt={data[0].created_at}
                tweetAnalysis={analysis}
              />  
            )
          }
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet