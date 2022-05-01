import { useSelector } from 'react-redux';
import styles from './use-section.module.scss';

import twitterLogo from '../../../../assets/twitter-logo.svg';

const UserSection = () => {
    const {tagName, author: {name, userImage}} = useSelector(state => state.tweetsTimeline);
    
    return(
        <div className={styles.userSection}>
            <div className={styles.userSection_info}>
                <img 
                    className={`${styles.userSection_infoImg} ${styles.el}`} 
                    src={userImage ? userImage : twitterLogo.src} 
                    draggable={false} 
                    alt={name ? `${name}'s profile picture` : 'Twitter logo'} 
                    title={name ? `${name}'s profile picture` : 'Twitter logo'}
                />
                <span className={`${styles.userSection_infoName} ${styles.el}`}>
                    <span className={styles.topicName}>
                        { name ? name.toUpperCase() : tagName.toUpperCase()  }
                    </span>
                </span>
            </div>
        </div>  
    )
}

export default UserSection;