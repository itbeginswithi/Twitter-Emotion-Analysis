import React from 'react'
import {motion} from 'framer-motion';
import {BsSearch} from 'react-icons/bs';

import styles from './AnalyseProfile.module.scss';
import manLottieJson from  '../../assets/lottie/lf30_editor_g5o26b7o.json'
import LottieAnimation from '../Lottie/Lottie';

const animationOptions = {
  loop: true, 
  autoplay: true, 
  animationData: manLottieJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const ProfileSearch = () => {
  return (
    <div id="analyseProfile" className={`${styles.analyseProfile} f-height section-padding`}>
      <LottieAnimation lottieJson={manLottieJson}/>
      <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
        <h4>Search By profile or Tag</h4>
        <div className={styles.analyseProfile__searchBar_inputContainer}>
          <input  className={styles.input} type="text" placeholder="Elon Musk"/>
          <button className={styles.analyseProfile__searchBar_btn} type="submit" onClick={() => {}}>
            <BsSearch/>
          </button>
        </div>

        <div>
          <div className="profileSection">
            <div className="profile__img">
              {/* <Image src={} /> */}
            </div>
              <a href="/" target="_blank" rel="noopener noreferrer">Username</a>
          </div>
            <div className="tweet">
              <div className="tweet__data">
                Enim pariatur ea ullamco commodo non commodo ad dolor aliqua magna.  laborum enim enim dolor amet.
              </div>
              <div className="tweet__results"></div>
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default ProfileSearch