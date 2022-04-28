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
            <ul className={styles.results__list}>
                <li className={styles.results__item}>
                    <Image src={joy} alt="joy" title="joy" height={20} width={20}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={sadness} alt="sadness" title="sadness" height={20} width={20}/>
                    <span>2%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={anger} alt="anger" title="anger" height={20} width={20}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={fear} alt="fear" title="fear" height={20} width={20}/>
                    <span>40%</span>
                </li>
                <li className={styles.results__item}>
                    <Image src={joy} alt="joy" title="joy" height={20} width={20}/>
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
