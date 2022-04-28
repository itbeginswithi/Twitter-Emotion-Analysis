import React, {useState} from "react";
import {useSelector} from 'react-redux';
import Image from 'next/image';
import moment from 'moment';
import toPercent from "to-percent";

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';
import { cleanText } from "../../utils/cleanText";
import Error from "../Error/Error";

const LoadingEmotionResults = () => (
  <div className={styles.fetchingEmotions}>
    <div className={styles.fetchingEmotions__loading}/>
    <div className={styles.fetchingEmotions__loading}/>
    <div className={styles.fetchingEmotions__loading}/>
    <div className={styles.fetchingEmotions__loading}/>
    <div className={styles.fetchingEmotions__loading}/>
  </div>
)

const EmotionResult = ({emotion, emotionValue}) => {
    let emotionIcon;

    switch (emotion) {
      case 'joy':
        emotionIcon = joy;
        break;
      case 'sadness':
        emotionIcon = sadness;
        break;
      case 'anger':
        emotionIcon = anger;
        break;
      case 'disgust':
        emotionIcon = disgust;
        break;
      case 'fear':
        emotionIcon = fear;
        break;
      default:
        break;
    }

    return(
      <li className={styles.results__item}>
        <Image 
          src={emotionIcon} 
          alt={emotion} 
          title={emotion} 
          style={emotion === 'disgust' && {marginTop: '1px'}}
          height={emotion === 'disgust' ? 29 : 25} 
          width={emotion === 'disgust' ? 29 : 25} 
        />
        <span>{toPercent(emotionValue)}%</span>
      </li>
    )
}

const TweetBox = ({showProfile, userImage, username, tweetText, tweetAnalysis, createdAt}) => {
  const fetchingAnalysis = useSelector(state => state.tweets.fetchingAnalysis);
  const [error, setError] = useState(null);

  return (
    <div className={styles.container}>
      {showProfile && (
        <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" className={`${styles.profile}`}>
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
              { fetchingAnalysis &&
                (
                  <LoadingEmotionResults />
                )
              }

              {tweetA&nalysis.length > 0 & !error &&
                tweetAnalysis.map(emotion => (
                  <EmotionResult key={emotion[0]} emotion={emotion[0]} emotionValue={emotion[1]}/>
                ))
              }

              {error && <Error message="Error occured"/>}
            </ul>
            <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;