import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

import styles from './Header.module.scss'
import { joy, sadness, anger,  fear,  disgust } from '../../constants/emotionIcons';
import twitterIcon from '../../assets/twitter-icon.svg';

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
        <div className={styles.right__twitterImg}>
          <Image src={twitterIcon} alt="Twitter Icon" draggable={false} width={200} height={200} />
        </div>
        <div className={styles.right__emotionIcons}>
          <Image src={joy} alt="joy" draggable={false} width={65} height={65} style={{position: 'absolute', top: }}/>
          <Image src={sadness} alt="sadness" draggable={false} width={65} height={65}/>
          <Image src={anger} alt="anger" draggable={false} width={65} height={65}/>
          <Image src={disgust} alt="disgust" draggable={false} width={65} height={65}/>
          <Image src={fear} alt="fear" draggable={false} width={65} height={65}/>
        </div>
      </motion.div>
    </div>
  )
}

export default Header