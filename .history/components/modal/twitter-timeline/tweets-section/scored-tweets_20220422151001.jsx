import {useEffect, useState} from 'react';
// import { useDispatch} from 'react-redux';

import LoadingIcon from '../../../../assets/twitter-icon.gif';
import TweetBox from '../../../TweetBox/TweetBox';

const ScoredTweets = () => {
    // let data = useSelector(state => state.tweets.tweets);
    let data = [];
    let tweets = [];
    // let dispatch = useDispatch();

    if(data.length){
        tweets = data.map(result => {
            const results = {
                joy: '2%',
                sadness: '4%',
                disgust: '8%',
                fear: '12%',
                anger: '46%'
            }

            //Readable date
            // let emotionAnalysis = result.results
            // let analysisError = emotionAnalysis.message

            // results={
            //     !analysisError ?  emotionAnalysis : ''
            // }
            
            return ( 
                <TweetBox 
                    key={result.id}
                    tweet={result.text}
                    tweetLink={''}
                    // error = { analysisError ? result.results.message.statusText : ''}
                    // tweetDate={tweetDate}
                    id={result.id}
                />
            )
        })
    }
    
    return (
        <>
            { !data.length && <LoadingIcon/> }

            { tweets }
        </>
    )
}

export default ScoredTweets;