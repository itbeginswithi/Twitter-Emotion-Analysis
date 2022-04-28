import ScoredTweets from './scored-tweets';
import styles from './tweets-section.module.scss';
// import { useSelector } from 'react-redux';

const TweetsSection = props => {
    const tweetsData = useSelector(state => state.tweets.tweets);
    const TDLength = tweetsData.length;

    return(
        <div className={styles.tweetsSection}>
            <h6 className={styles.title}>{TDLength >= 1 && `Latest ${TDLength} tweets `}</h6>
            <ScoredTweets/>
        </div>
    )
}

export default TweetsSection;