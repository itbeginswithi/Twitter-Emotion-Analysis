import { motion } from 'framer-motion'
import React from 'react'

const Header = () => {
  return (
    <div>
      <motion.div className={styles.left}>
        <h2>Twitter Emotion Analysis</h2>
      </motion.div>
    </div>
  )
}

export default Header