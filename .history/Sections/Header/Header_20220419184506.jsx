import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

import styles from './Header.module.scss'
import { joy, sadness, anger,  fear,  disgust } from '../../constants/emotionIcons';
import twitterLogo from '../../assets/twitter-logo.svg';

const Header = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.left}>
        <h2 className={styles.left__title}>Twitter Emotion Analysis</h2>
        <p className={styles.left__desc}>A topic is all you need to analyse the emotions displayed in any public tweet.</p>
        <div className={styles.left__actions}>
          <Link className={styles.left__actions_btn} to='/' duration={500}>Search By Profile or Tag</Link>
          <Link className={styles.left__actions_btn} to='/' duration={500}>Search By Select Tweet Post</Link>
        </div>
      </motion.div>
      <motion.div className={styles.right}>
        <div className={styles.right__twitterLogo}>
          <Image src={twitterLogo} alt="Twitter Icon" draggable={false} width={200} height={200} />
        </div>
        <div className={styles.right__emotionIcons}>
          <div className={styles.right__emotionIcons_imgWrapper}>
            <Image src={joy} alt="happy face" title="happy face" draggable={false} width={65} height={65} />
          </div>
          <div className={styles.right__emotionIcons_imgWrapper}>
            <Image src={sadness} alt="sad face" title="sad face"draggable={false} width={65} height={65}/>
          </div>
          <div className={styles.right__emotionIcons_imgWrapper}>
            <Image src={anger} alt="angry face" title="angry face" draggable={false} width={65} height={65}/>
          </div>
          <div className={styles.right__emotionIcons_imgWrapper}>
            <Image src={disgust} alt="disgusted face" title="disgusted face" draggable={false} width={65} height={65}/>
          </div>
          <div className={styles.right__emotionIcons_imgWrapper}>
            <Image src={fear} alt="scared face" title="scared face" draggable={false} width={65} height={65}/>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header