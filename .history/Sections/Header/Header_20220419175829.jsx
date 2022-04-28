import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

import styles from './Header.module.scss'
import { joy, sadness, anger,  fear,  disgust } from '../../constants';
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
        <Image src={twitterIcon} alt="Twitter Icon" draggable={false} width={200} height={200} />
        <div className={styles.right__emotionIcons}>
          <Image sr
        </div>
      </motion.div>
    </div>
  )
}

export default Header