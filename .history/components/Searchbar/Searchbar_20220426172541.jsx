import React, {useState} from 'react'
import {motion} from 'framer-motion';
import {BsSearch} from 'react-icons/bs';

import styles from './Searchbar.module.scss';

const Searchbar = ({children, placeholder, description, handleSubmit, searchByStatus}) => {
  const [query, setQuery] = useState();
  setState({})

  const getStatusId = () => {
    //! check if input exists and valid
    //! check if valid url is provided
    //! dispatch twitter error if statusId doesnt exist

    //https://twitter.com/user/status/1514548909249539 => 1514548909249539
    const statusId = query.split('/').slice(-1);

    return handleSubmit(statusId);
  }

  const getUser = () => {
    //! Must start with an @ or #   
    return handleSubmit(query);
  }

  return (
    <motion.div transition={{duration: 1}} whileInView={{opacity: [0, 1]}} className={styles.analyseProfile__searchBar}>
    <h2>{description}</h2>
    <div className={styles.analyseProfile__searchBar_inputContainer}>
      <input  className={styles.input} type="text" placeholder={placeholder} value={query} onChange={(e) => setQuery(e.target.value.trim())}/>
      <button 
        className={styles.analyseProfile__searchBar_btn} 
        type="submit" 
        onClick={searchByStatus ? getStatusId : getUser}
      >
        <BsSearch/>
      </button>
    </div>
    {children}
  </motion.div>
  )
}

export default Searchbar