import React from 'react';
import Lottie from 'react-lottie';

import styles from './Lottie.module.scss';

const LottieAnimation = ({lottieJson}) => {

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }  

  return (
    <div className={styles.analyseProfile__animation}>
        <Lottie className={styles.analyseProfile__animation_lottie} options={animationOptions}/>
    </div>
  )
}

export default LottieAnimation