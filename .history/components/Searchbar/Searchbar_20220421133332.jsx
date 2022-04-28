import React from 'react'
import {motion} from 'frame';

const Searchbar = () => {
  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
    <h4>Search By profile or Tag</h4>
    <div className={styles.analyseProfile__searchBar_inputContainer}>
      <input  className={styles.input} type="text" placeholder="Elon Musk"/>
      <button className={styles.analyseProfile__searchBar_btn} type="submit" onClick={() => {}}>
        <BsSearch/>
      </button>
    </div>
    <TweetBox />
  </motion.div>
  )
}

export default Searchbar