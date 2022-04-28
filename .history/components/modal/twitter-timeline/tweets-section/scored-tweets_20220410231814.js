import ScoredTweet from './scored-tweet';
import { useSelector } from 'react-redux';
import LoadingIcon from '../../../ui/LoadingIcon/LoadingIcon';
import { Fragment, useEffect, useState} from 'react';
import { useDispatch} from 'react-redux';

const ScoredTweets = props => {
    let data = useSelector(state => state.tweets.tweets);
    let tweets = [];
    let dispatch = useDispatch();
    console.log(data)

    const formatDate = (date) => {
        let dateTime = new Date(date)        
        dateTime = dateTime.toString()
        dateTime = dateTime.replace('GMT+0100', "");
        return dateTime
    }

    if(data.length > 0){
        tweets = data.map(result => {
            const results = {
                joy: '2%',
                sadness: '4%',
                disgust: '8%',
                fear: '12%',
                anger: '46%'
            }

            //Readable date
            let tweetDate = formatDate(result.created_at)

            let emotionAnalysis = result.results
            let analysisError = emotionAnalysis.message

            
            return ( 
                <ScoredTweet 
                    key={result.id}
                    tweet={result.text}
                    tweetLink={''}
                    results={
                        !analysisError ?  emotionAnalysis : ''
                    }
                    error = { analysisError ? result.results.message.statusText : ''}
                    tweetDate={tweetDate}
                    id={result.id}
                />
            )
        })
    }
    
    return (
        <Fragment>
            { data.length < 1 && <LoadingIcon/> }

            { tweets }
        </Fragment>
    )
}

export default ScoredTweets;