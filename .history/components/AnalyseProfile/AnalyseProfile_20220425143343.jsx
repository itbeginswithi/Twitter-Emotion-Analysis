import React from 'react'
import {motion} from 'framer-motion';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';

const ProfileSearch = () => {

  const handleSubmit = (query) => {
    //@ -> fetch user timeline
    if(query.includes('@')) {
      const username = query.slice(1);
      
    }
    //# -> fetch for tag related tweet
  }

  return (
    <div id="analyseProfile" className={`flex f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <Searchbar description="Search By profile or Tag" placeholder="Elon Musk" handleSubmit={handleSubmit}/>
    </div>
  )
}

export default ProfileSearch