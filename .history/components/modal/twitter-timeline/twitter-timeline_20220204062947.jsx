import TweetsSection from './tweets-section/tweets-section';
import styles from './twitter-timeline.module.scss';
import UserSection from './user-section/user-section';
import {tweetsActions} from '../../../store/tweets-slice'
import {loadingActions} from '../../../store/loading-slice'
import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getData } from '../../../helpers/analyseData'
import { errorActions } from '../../../store/error-slice';

const TwitterTimeline = props => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(async () => {
        if(router.query.tweets){
            const topicValue = router.query.tweets;

            try {
                dispatch(loadingActions.responseState('Fetching Tweets'))
                
                let response = await fetch(`/api/${topicValue}`)
                let result = await response.json()

                let languageError;
                let noTweetsError;

                if(result){
                    /*
                        Two 'if checks' for the 'meta' otherwise
                        it throws a 'meta not found error' if the result obj 
                        contains a different response
                    */
                    if(result.topic){
                        if(result.topic.meta){
                            noTweetsError = result.topic.meta.result_count
                        }
                    }

                    if(result.error){
                        languageError = result.error.code
                    }
                }

                if(languageError === "ERR_UNESCAPED_CHARACTERS"){
                    dispatch(errorActions.setError({name: "Language issue", description: "No English tweets available."}))
                    return
                }    

                if(noTweetsError === 0){
                    dispatch(errorActions.setError({name: "No tweets available", description: "Check spelling or try an other topic name."}))
                    return
                }                

                dispatch(loadingActions.responseState('Tweets Fetched'))

                let rawResult= result.topic.data;

                // retrieve english tweets alone
                const filteredTweets = rawResult.filter(tweet => tweet.lang === 'en')
  

                let displayTweets = []

                //push 25 elements into the new array
                filteredTweets.map(tweetObject => {
                    if(displayTweets.length < 25){
                        displayTweets.push(tweetObject)
                    }
                })

                dispatch(loadingActions.responseState('Analyzing Tweets'))
            
                setTimeout(() => {
                    dispatch(loadingActions.startCounter())
                }, 3000)

                let data = await getData(displayTweets)

                setTimeout(() => {
                    if(data.length > 0){
                        dispatch(loadingActions.responseState('Tweets Analyzed!'))
                        dispatch(tweetsActions.setTweets(data))
                    }
                }, 12000);


            } catch (error) {
                console.log(error)
            }
        }

    }, [router])

    const deactivateModal = () => {
        dispatch(tweetsActions.clearTweets())
        dispatch(tweetsActions.hideTweets())
        router.push(`/`)
    }

    return(
        <>
            <div className={`${styles.loadedTweets} ${styles.glass}`} onClick={deactivateModal}>
            </div>

            <div className={styles.twitter}>
                <UserSection/>
                <TweetsSection/>
            </div>
        </>
    )
}

export default TwitterTimeline;