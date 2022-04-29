import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './use-section.module.scss';

import twitterLogo from '../../../../assets/twitter-logo.svg';

const UserSection = () => {
    const {name, userImage} = useSelector(state => state.tweetsTimeline.author);
    
    return(
        <div className={styles.userSection}>
            <div className={styles.userSection_info}>
                <Image className={`${styles.userSection_infoImg} ${styles.el}`} src={userImage ? userImage : twitterLogo} height="110" width="110" draggable={false} alt={name ? name : 'twitter logo'} title={name ? `${name}'s profile picture` : ''}/>
                <span className={`${styles.userSection_infoName} ${styles.el}`}><span className={styles.topicName}>{ name && name.toUpperCase()  }</span></span>
            </div>
        </div>  
    )
}

export default UserSection;