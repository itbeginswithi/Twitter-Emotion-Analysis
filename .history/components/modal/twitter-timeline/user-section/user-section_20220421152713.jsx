import Image from 'next/image';
import styles from './use-section.module.scss';

import twitterLogo from '../../../../assets/twitter-logo.svg';

const UserSection = () => {
    return(
        <div className={styles.userSection}>
            <div className={styles.userSection_info}>
                <Image className={`${styles.userSection_infoImg} ${styles.el}`} src={twitterLogo} alt="generic topic photo" title="profile picture"/>
                {/* <span className={`${styles.userSection_infoName} ${styles.el}`}>Topic: <span className={styles.topicName}>{ topicName && topicName.toUpperCase()  }</span></span> */}
            </div>
        </div>  
    )
}

export default UserSection;