import TweetsSection from './tweets-section/tweets-section';
import styles from './twitter-timeline.module.scss';
import UserSection from './user-section/user-section';

const TwitterTimeline = () => {

    const deactivateModal = () => {
        // dispatch(tweetsActions.clearTweets())
        // dispatch(tweetsActions.hideTweets())
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