import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {LottieAnimation, Searchbar,TweetBox, Error} from '../../components';
import { tweetsActions } from '../../store/slices/tweetBox';
import { searchbarActions } from '../../store/slices/searchbar';
import womenLottie from '../../assets/lottie/woman-twitter.json';

const AnalyseTweet = () => {
  const dispatch = useDispatch();
  const {displayTweetBox} = useSelector(state => state.tweetBox);
  
  const [tweetText, setTweetText] = useState('');
  const [fetchingAnalysis, setFetchingAnalysis] = useState({});
  const [tweetAuthor, setTweetAuthor] = useState({});
  const [tweetAnalysis, setTweetAnalysis] = useState([]);
  const [tweetCreatedAt, setTweetCreatedAt] = useState('');
  const [analysisError, setAnalysisError] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (statusId) => {
    dispatch(searchbarActions.setIsLoading(true));

    const fetchedTweet = await (await fetch(`/api/tweets/${statusId}`)).json();

    if(!fetchedTweet || fetchedTweet === undefined){
      // fetchedTweet is undefined because auth token is wrong
      dispatch(searchbarActions.setIsLoading(false));
      setError("The twitter api service is not available, try again later.")
      return;
    }

    if(fetchedTweet?.errors){
      // Wrong status Id
      const errorMessage = fetchedTweet.errors[0].message;
      
      if(errorMessage === undefined || errorMessage.includes('ids')) {
        errorMessage = 'No tweet was found with that id.'
      }

      setError(errorMessage);
 
      dispatch(tweetsActions.displayTweetBox(false));
      
      dispatch(tweetsActions.setTweetData({
        dataExists: false
      }));
      setTweetText('');
      setTweetAuthor({})

      dispatch(searchbarActions.setIsLoading(false));
      return;
    }
    
    if(error) setError(null);
    const {data, includes: {users}} = fetchedTweet;

    setTweetText(data[0].text);
    setTweetCreatedAt(data[0].created_at);
    setTweetAuthor(users[0]);
    
    dispatch(tweetsActions.displayTweetBox(true));
    dispatch(tweetsActions.setTweetData({
      dataExists: true
    }));
    
    dispatch(searchbarActions.setIsLoading(false));
    
    setFetchingAnalysis(true);
    
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
    
    //Potential IBMWatson API Errors
    if(analysis?.message){
      setFetchingAnalysis(false);

      const message = analysis.message.message;
      setAnalysisError(message);
      
      return;
    }
    
    setFetchingAnalysis(false);
    setTweetAnalysis(analysis);
  }

  return (
    <div id="analyseTweet" className={`flex res-f-height section-padding`}>
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
                tweetText={tweetText}
                createdAt={tweetCreatedAt}
                tweetAnalysis={tweetAnalysis}
                username={tweetAuthor.name}
                userImage={tweetAuthor.profile_image_url}
              />  
            )
          }
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet