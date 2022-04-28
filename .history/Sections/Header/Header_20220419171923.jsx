import { motion } from 'framer-motion'
import React from 'react'

const Header = () => {
  return (
    <div>
      <motion.div className={styles.left}>
        <h2>Twitter Emotion Analysis</h2>
        <p>A topic is all you need to analyse the emotions displayed in any public tweet.</p>
        <div>
          <button/>
        </div>
      </motion.div>
    </div>
  )
}

export default Header