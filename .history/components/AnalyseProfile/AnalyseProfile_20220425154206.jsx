import React from 'react'
import {motion} from 'framer-motion';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';
import Searchbar from '../Searchbar/Searchbar';
import { analyseTweetsArray } from '../../utils/analyseTweetsArray';

const ProfileSearch = () => {

  const handleSubmit = async (query) => {  
    //@ -> fetch user timeline
    if(query.includes('@')) {
      const username = query.slice(1);
      const userTimeline = await (await fetch(`/api/tweets/userTimeline/${username}`)).json();  

      const {data, includes: {users}} = userTimeline;
      //* dispatch users
      //* analyse data
      //data = [{}, {}, {}]
      const newArr = await analyseProfile(data);
      console.log(newArr);
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