import React from "react";
import Image from 'next/image';
import moment from 'moment';

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';

const TweetBox = ({showProfile, userImage, username, tweetText, TweetAnalysis, createdAt}) => {

  return (
    <div className={styles.container}>
      {showProfile && (
        <div className={styles.profile}>
          <div className={styles.profile__img}>{userImage && <Image layout="fill" src={userImage} alt={`${username} photo`} />}</div>
          <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" className={styles.profile__username}>
            @{username ? username : ''}
          </a>  
        </div>
      )}
      <div className={styles.tweet}>
        <div className={showProfile ? `${styles.tweet__text}` : `${styles.tweet__textModal}`}>
          {tweetText || 'Enim pariatur ea ullamco commodo non commodo ad dolor aliqua magna. laborum enim enim dolor amet.'}
        </div>
        <div className={styles.tweet__data}>
            <ul className={styles.results__list}>
                <li className={styles.results__item}>
                    <Image src={joy} alt="joy" title="joy" height={25} width={25}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={sadness} alt="sadness" title="sadness" height={25} width={25}/>
                    <span>2%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={anger} alt="anger" title="anger" height={25} width={25}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={fear} alt="fear" title="fear" height={25} width={25}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={disgust} alt="disgust" title="disgust" height={25} width={25}/>
                    <span>40%</span>
                </li>
            </ul>
            <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;