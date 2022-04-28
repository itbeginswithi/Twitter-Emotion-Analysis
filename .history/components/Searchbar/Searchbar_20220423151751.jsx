import React, {useState} from 'react'
import {motion} from 'framer-motion';
import {BsSearch} from 'react-icons/bs';

import styles from './Searchbar.module.scss';

const Searchbar = ({children, placeholder, description, handleSubmit}) => {
  const [query, setQuery] = useState();

  const getStatusId = () => {
    //
    //! check if valid url is provided
    //! dispatch twitter error if statusId doesnt exist

    //https://twitter.com/user/status/1514548909249539 => 1514548909249539
    const statusId = query.split('/').slice(-1);
    return handleSubmit(statusId);
  }

  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
    <h2>{description}</h2>
    <div className={styles.analyseProfile__searchBar_inputContainer}>
      <input  className={styles.input} type="text" placeholder={placeholder} value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button className={styles.analyseProfile__searchBar_btn} type="submit" onClick={getStatusId}>
        <BsSearch/>
      </button>
    </div>
    {children}
  </motion.div>
  )
}

export default Searchbar