import React from "react";
import Image from 'next/image';
import moment from 'moment';

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';

const TweetBox = ({showProfile, userImage, username, tweet, TweetAnalysis, datePosted}) => {
  return (
    <div className={styles.container}>
      {showProfile && (
        <div className={styles.profile}>
          <div className={styles.profile__img}>{/* <Image src={} /> */}</div>
          <a href="/" target="_blank" rel="noopener noreferrer" className={styles.profile__username}>
            Username
          </a>
        </div>
      )}
      <div className={styles.tweet}>
        <div className={styles.tweet__text}>
          Enim pariatur ea ullamco commodo non commodo ad dolor aliqua magna.
          laborum enim enim dolor amet.
        </div>
        <div className={showProfile ? `${styles.tweet__data}` : ``${styles.tweet__data}` ${styles.tweet__modalData}`}>
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
            <div className={styles.date}>Date</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;