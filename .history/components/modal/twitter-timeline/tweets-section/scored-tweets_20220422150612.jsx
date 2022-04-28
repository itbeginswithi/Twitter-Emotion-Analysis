import LoadingIcon from '../../../../assets/twitter-icon.gif';
import { Fragment, useEffect, useState} from 'react';
// import { useDispatch} from 'react-redux';
import TweetBox from '../../../TweetBox/TweetBox';
import {motion} from 'framer-motion';

const ScoredTweets = () => {
    // let data = useSelector(state => state.tweets.tweets);
    let data = [1, 2, 3, 4, 5, 6];
    let tweets = [];
    // let dispatch = useDispatch();

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
            // let tweetDate = formatDate(result.created_at)

            // let emotionAnalysis = result.results
            // let analysisError = emotionAnalysis.message

            // results={
            //     !analysisError ?  emotionAnalysis : ''
            // }
            
            return ( 
                <motion.div whileInView={{opacity: []}}>

                <TweetBox 
                    key={result.id}
                    tweet={result.text}
                    tweetLink={''}
                    // error = { analysisError ? result.results.message.statusText : ''}
                    // tweetDate={tweetDate}
                    id={result.id}
                    />
                    </motion.div>
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