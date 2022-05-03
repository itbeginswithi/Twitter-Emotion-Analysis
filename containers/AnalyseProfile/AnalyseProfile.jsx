import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {Searchbar, LottieAnimation, Error} from '../../components';
import {tweetsModalActions} from '../../store/slices/tweetsModal';
import {timelineActions} from '../../store/slices/tweetsTimeline';
import {searchbarActions} from '../../store/slices/searchbar';
import { analyseTweetsArray } from '../../utils/analyseTweetsArray';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json';

const compareQueries = (query, previousQuery, dispatch, setPreviousQuery) => { 
  if(query === previousQuery){ 
    dispatch(searchbarActions.setIsLoading(false));
    dispatch(tweetsModalActions.isOpen(true));
    return 'sameQuery';
  }

  if(query !== previousQuery){
    dispatch(timelineActions.clearTweets());
  }

  setPreviousQuery(query);
}

const ProfileSearch = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [previousQuery, setPreviousQuery] = useState('');

  const handleSubmit = async (query) => {
    dispatch(searchbarActions.setIsLoading(true));
    
    if(query.charAt(0) !== '@' && query.charAt(0)  !== '#'){
      dispatch(searchbarActions.setIsLoading(false));
      setError("Search term must start with @ or #");
      return;
    }
    
    if(error) setError(null);

    //* @ -> fetch user timeline
    if(query.includes('@')) {
      const comparison = compareQueries(query, previousQuery, dispatch, setPreviousQuery);
      if(comparison === 'sameQuery') return;

      const username = query.slice(1);

      const result = await fetch(`/api/tweets/userTimeline/${username}`);  
      
      if(!result.ok){ 
        dispatch(searchbarActions.setIsLoading(false));
        setError('The profile you searched for doesn\'t exist');
        return;
      }

      const userTimeline = await result.json();  
      console.log(userTimeline);

      if(userTimeline?.errors){
        dispatch(searchbarActions.setIsLoading(false));
        setError(`${query} is set to private.`);
        return;
      }

      if(userTimeline?.meta?.result_count === 0) {
        dispatch(searchbarActions.setIsLoading(false));
        setError(`${query} has no public tweets to analyse.`);
        return;
      }
      
      const {data, includes: {users}} = userTimeline;
      const authorInfo = {
        username: users[0].username, 
        name: users[0].name, 
        userImage: users[0]?.profile_image_url
      }
      
      // open Modal
      dispatch(searchbarActions.setIsLoading(false));
      dispatch(tweetsModalActions.isOpen(true));
      
      dispatch(timelineActions.setTweets({data}))
      dispatch(timelineActions.setAuthor(authorInfo))
      
      // analyse the tweets : data = [{}, {}, {}]
      const analysedTweets = await analyseTweetsArray(data);
      dispatch(timelineActions.setTweetsAnalysis(analysedTweets));
    }

    // # -> fetch for tag related tweet
    if(query.includes('#')) {
      //No query comparison needed since newer tweets are added every second. 
      dispatch(timelineActions.clearTweets());

      const tag = query.slice(1);

      const result = await fetch(`/api/tweets/byTag/${tag}`);  
      
      console.log(result);

      if(!result.ok){ 
        dispatch(searchbarActions.setIsLoading(false));
        setError('The tag you searched for doesn\'t exist');
        return;
      }

      const tweets = await result.json();  

      if(tweets.meta.result_count === 0) {
        dispatch(searchbarActions.setIsLoading(false));
        setError('The tag you searched for doesn\'t exist');
        return;
      }

      //tweets = {data: [ { id: '', author_id: '', text: '', created_at: '' } ], includes: users: [{}]}        
      const {data, includes: {users}} = tweets;
      
      // open Modal
      dispatch(searchbarActions.setIsLoading(false));
      dispatch(tweetsModalActions.isOpen(true));
      
      dispatch(timelineActions.setTweets({data, tagName: query}))
      dispatch(timelineActions.setAuthors(users))
      
      // analyse tweets
      const analysedTweets = await analyseTweetsArray(data);
      dispatch(timelineActions.setTweetsAnalysis(analysedTweets));
    }
  }

  return (
    <div id="analyseProfile" className={`flex res-f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <Searchbar 
        description="Search By profile or Tag" 
        placeholder="@elonmusk or #evs" 
        handleSubmit={handleSubmit}
      >
        {error && <Error message={error} marginTop/>}
      </Searchbar>
    </div>
  )
}

export default ProfileSearch