import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json';
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import { analyseTweetsArray } from '../../utils/analyseTweetsArray';
import Error from '../Error/Error';
import {tweetsModalActions} from '../../store/slices/tweetsModal';
import {timelineActions} from '../../store/slices/tweetsTimeline';
import {searchbarActions} from '../../store/slices/searchbar';

const compareQueries = (query, previousQuery, dispatch, setPreviousQuery) => { 
  if(query === previousQuery){ 
    dispatch(searchbarActions.setIsLoading(false));
    dispatch(tweetsModalActions.isOpen(true));
    return;
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
       
    if(!query.charAt(0) === '@' || !query.charAt(0)  === '#'){
      dispatch(searchbarActions.setIsLoading(false));
      setError("Search term must start with @ or #");
      return;
    }

    if(error) setError(null);

    //* @ -> fetch user timeline
    if(query.includes('@')) {
      compareQueries(query, previousQuery, dispatch, setPreviousQuery);

      const username = query.slice(1);

      const result = await fetch(`/api/tweets/userTimeline/${username}`);  
      
      if(!result.ok){ 
        dispatch(searchbarActions.setIsLoading(false));
        setError('The profile you searched for doesn\'t exist');
        return;
      }

      const userTimeline = await result.json();  

      console.log(userTimeline);
      
      const {data, includes: {users}} = userTimeline;
      
      //*open Modal
      dispatch(searchbarActions.setIsLoading(false));
      dispatch(tweetsModalActions.isOpen(true));
      
      dispatch(timelineActions.setTweets(data))
      dispatch(timelineActions.setAuthor(users[0]))
      
      //* analyse data
      //data = [{}, {}, {}]
      const analysedTweets = await analyseTweetsArray(data);
      dispatch(timelineActions.setTweetsAnalysis(analysedTweets));
    }

    //* # -> fetch for tag related tweet
  }

  return (
    <div id="analyseProfile" className={`flex f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <div style={{flex: '1'}}>
        <Searchbar 
          description="Search By profile or Tag" 
          placeholder="@elonmusk or #evs" 
          handleSubmit={handleSubmit}
        />
        {error && <Error message={error} marginTop/>}
      </div>
    </div>
  )
}

export default ProfileSearch