import React from "react";
import Image from 'next/image';
import moment from 'moment';

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';
import { cleanText } from "../../utils/cleanText";

const Emotion = (src, ) => (
    <li className={styles.results__item}>
        <Image src={joy} alt="joy" title="joy" height={25} width={25}/>
        <span>{tweetAnalysis.joy}</span>
    </li>
)

const TweetBox = ({showProfile, userImage, username, tweetText, tweetAnalysis, createdAt}) => {

  return (
    <div className={styles.container}>
      {showProfile && (
        <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" className={styles.profile}>
          <div className={styles.profile__img}>
            {userImage && <Image width={30} height={30} src={userImage} alt={`${username} photo`} />}
          </div>
          <span className={styles.profile__username}>{username ? username : ''}</span>
        </a>
      )}
      <div className={styles.tweet}>
        <div className={showProfile ? `${styles.tweet__text}` : `${styles.tweet__textModal}`}>
          {tweetText && cleanText(tweetText)}
        </div>
        <div className={styles.tweet__data}>
            <ul className={styles.results__list}>
                <li className={styles.results__item}>
                    <Image src={joy} alt="joy" title="joy" height={25} width={25}/>
                    <span>{tweetAnalysis.joy}</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={sadness} alt="sadness" title="sadness" height={25} width={25}/>
                    <span>{tweetAnalysis.sadness}</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={anger} alt="anger" title="anger" height={25} width={25}/>
                    <span>{tweetAnalysis.anger}</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={fear} alt="fear" title="fear" height={25} width={25}/>
                    <span>{tweetAnalysis.fear}</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={disgust} alt="disgust" title="disgust" height={25} width={25}/>
                    <span>{tweetAnalysis.disgust}</span>
                </li>
            </ul>
            <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;