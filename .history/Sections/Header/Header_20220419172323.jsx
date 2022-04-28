import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

import styles from './'

const Header = () => {
  return (
    <div>
      <motion.div className={styles.left}>
        <h2>Twitter Emotion Analysis</h2>
        <p>A topic is all you need to analyse the emotions displayed in any public tweet.</p>
        <div>
          <Link to='/' duration={500}>Search By Profile or Tag</Link>
          <Link to='/' duration={500}>Search By Select Tweet Post</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Header