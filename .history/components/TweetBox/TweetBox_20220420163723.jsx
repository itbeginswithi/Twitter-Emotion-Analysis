import React from "react";
import Image from 'next/image';
import moment from 'moment';

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';

const TweetBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className="profile__img">{/* <Image src={} /> */}</div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Username
        </a>
      </div>
      <div className={styles.tweet}>
        <div className={styles.tweet__text}>
          Enim pariatur ea ullamco commodo non commodo ad dolor aliqua magna.
          laborum enim enim dolor amet.
        </div>
        <div className={styles.tweet__data}>
            <ul className={styles.results_}>
                <li className="emotion">
                    <Image src={joy} alt="joy" />
                    <span>40%</span>
                </li>
            </ul>
            <div className="moment">Date</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
