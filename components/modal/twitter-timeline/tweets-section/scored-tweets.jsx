import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';

import LoadingIcon from '../../../../assets/twitter-icon.gif';
import TweetBox from '../../../TweetBox/TweetBox';

const ScoredTweets = () => {
    let dispatch = useDispatch();
    const {tweets, tweetsAnalysis} = useSelector(state => state.tweetsTimeline);

    let AnalysedTweets = [];

    if(tweets.length && tweetsAnalysis.length){
        AnalysedTweets = tweets.map((tweet, index) => {
            // let emotionAnalysis = result.results
            // let analysisError = emotionAnalysis.message

            // results={
            //     !analysisError ?  emotionAnalysis : ''
            // }

            const analysis = tweetsAnalysis.filter(analysis => analysis.id === tweet.id);
            console.log(analysis);

            return ( 
                <TweetBox 
                    key={index}
                    tweetText={tweet.text}
                    tweetLink={''}
                    // error = { analysisError ? result.results.message.statusText : ''}
                    createdAt={tweet.created_at}
                    tweetAnalysis={analysis[0].results}
                    analysisError={analysis[0].results?.message?.message}
                />
            )
        })
    }
    
    return (
        <>
            { !tweets.length && <LoadingIcon/>}
            { AnalysedTweets }
        </>
    )
}

export default ScoredTweets;