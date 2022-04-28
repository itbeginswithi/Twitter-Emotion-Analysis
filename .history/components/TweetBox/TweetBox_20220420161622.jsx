import React from "react";
import moment from 'moment';

import {joy, fear, anger, sadness, disgust} from '../../constants/emotionIcons';

const TweetBox = () => {
  return (
    <div>
      <div className="profileSection">
        <div className="profile__img">{/* <Image src={} /> */}</div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Username
        </a>
      </div>
      <div className="tweet">
        <div className="tweet__data">
          Enim pariatur ea ullamco commodo non commodo ad dolor aliqua magna.
          laborum enim enim dolor amet.
        </div>
        <div className="tweet__analysis">
            <div className="emotions">
                <li className="emotion"
            </div>
            <div className="moment">Date</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
