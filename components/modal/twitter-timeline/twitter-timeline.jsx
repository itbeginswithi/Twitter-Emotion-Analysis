import { useDispatch } from 'react-redux';
import { tweetsModalActions } from '../../../store/slices/tweetsModal';
import { timelineActions } from '../../../store/slices/tweetsTimeline';
import TweetsSection from './tweets-section/tweets-section';
import styles from './twitter-timeline.module.scss';
import UserSection from './user-section/user-section';

const TwitterTimeline = () => {
    const dispatch = useDispatch();

    const deactivateModal = () => {
        dispatch(tweetsModalActions.isOpen(false));
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