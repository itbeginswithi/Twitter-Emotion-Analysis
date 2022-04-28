import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Image from 'next/image';
import moment from 'moment';
import toPercent from "to-percent";
import {IoIosCloseCircle} from 'react-icons/io';

import styles from './TweetBox.module.scss';
import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';
import { cleanText } from "../../utils/cleanText";
import Error from "../Error/Error";
import { tweetsActions } from "../../store/slices/tweets";

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
          height={emotion === 'disgust' ? 29 : 25} 
          width={emotion === 'disgust' ? 29 : 25} 
        />
        <span>{toPercent(emotionValue)}%</span>
      </li>
    )
}

const TweetBox = ({
  showProfile, 
  closeTweetBox, 
  analysisError,
  fetchingAnalysis
  tweetText
  createdAt
  tweetAnalysis
  tweetAuthor
  isLoading}) => {
  const dispatch = useDispatch();

  const {
    fetchingAnalysis,
    tweetText, 
    createdAt,
    tweetAuthor: {
      name: username,
      profile_image_url: userImage,
    },
    tweetAnalysis
  } = useSelector(state => state.tweetBox);

  const handleCloseTweetBox = () => {
    dispatch(tweetsActions.displayTweetBox(false))
  };

  return (
    <motion className={styles.container}>
      {showProfile && (
        <div className={styles.topSection}>
          <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" className={`${styles.profile}`}>
            <div className={styles.profile__img}>
              {userImage && <Image width={30} height={30} src={userImage} alt={`${username} photo`} />}
            </div>
            <span className={styles.profile__username}>{username ? username : ''}</span>
          </a>

          {
            closeTweetBox && (
              <button className={styles.closeTweetBox} onClick={handleCloseTweetBox}>
                <IoIosCloseCircle size="25" color="#02547A"/>
              </button>
            )
          }
        </div>
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
              
              {
                analysisError && !fetchingAnalysis && (
                  <Error message={analysisError}/>
                )
              } 

              { !fetchingAnalysis && !analysisError &&
                tweetAnalysis?.map(emotion => (
                  <EmotionResult key={emotion[0]} emotion={emotion[0]} emotionValue={emotion[1]}/>
                ))
              }

            </ul>
            <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </motion>
  );
};

export default TweetBox;