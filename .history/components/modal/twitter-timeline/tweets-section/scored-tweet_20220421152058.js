import { Fragment } from 'react';
import styles from './scored-tweet.module.scss';
import moment from 'moment';

const ScoredTweet = ({tweet, results, tweetLink, tweetDate, error}) => {

    return (
        <div className={styles.scoredTweet}>
            <div className={styles.tweet}>
                {/* <a href={tweetLink} target="_blank" rel="noopener noreferrer"> */}
                    {tweet} 
                {/* </a> */}
            </div>

                <div className={styles.results}>
                    {
                        /* If the results object exists */
                        results !== '' && 
                        <div className={styles.kowalskiAnalysis}>
                            <div className={styles.emotionScore}>
                                <img src="/static/assets/emotions/happy.png" alt="joy" title="joy"/>
                                <span className={styles.score}>{(results.joy).toFixed(3)}</span>
                            </div>
                            <div className={styles.emotionScore}>
                                <img src="/static/assets/emotions/sad.png" alt="sadness" title="sadness"/>
                                <span className={styles.score}>{(results.sadness).toFixed(3)}</span>
                            </div>
                            <div className={styles.emotionScore}>
                                <img src="/static/images/vomiting.png" alt="disgust" title="disgust"/>
                                <span className={styles.score}>{(results.disgust).toFixed(3)}</span>
                            </div>
                            <div className={styles.emotionScore}>
                                <img src="/static/assets/emotions/scared.png" alt="fear" title="fear"/>
                                <span className={styles.score}>{(results.fear).toFixed(3)}</span>
                            </div>
                            <div className={styles.emotionScore}>
                                <img src="/static/assets/emotions/angry.png" alt="anger" title="anger"/>
                                <span className={styles.score}>{(results.anger).toFixed(3)}</span>
                            </div>
                        </div>
                    }
                    {   
                        error !== '' &&
                        <div className={styles.failedAnalysis}>
                            <span>Failed to analyse. {error}.</span>
                        </div>
                    }
                    <span className={styles.date}>{moment(tweetDate).fromNow()}</span>
                </div>
        </div>
    )
}

export default ScoredTweet;