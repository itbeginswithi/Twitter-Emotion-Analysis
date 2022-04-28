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

const TwitterTimeline = () => {

    // const deactivateModal = () => {
    //     dispatch(tweetsActions.clearTweets())
    //     dispatch(tweetsActions.hideTweets())
    // }

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