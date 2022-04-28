import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div>
      <motion.div className={styles.left}>
        <h2>Twitter Emotion Analysis</h2>
        <p>A topic is all you need to analyse the emotions displayed in any public tweet.</p>
        <div>
          <Link to='/' duration={500}><Link
        </div>
      </motion.div>
    </div>
  )
}

export default Header