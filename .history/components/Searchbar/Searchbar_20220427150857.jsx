import React, {useState} from 'react'
import {motion} from 'framer-motion';
import {BsSearch} from 'react-icons/bs';
import { useSelector } from 'react-redux';

import styles from './Searchbar.module.scss';
import Error from '../Error/Error';

const Searchbar = ({children, placeholder, description, handleSubmit, searchByStatus}) => {
  const tweetBoxIsVisible = useSelector(state => state.tweetBox.displayTweetBox);
  const [query, setQuery] = useState();
  const [previousQuery, setPreviousQuery] = useState();

  const getStatusId = () => {
    //! check if input exists and valid
    //! check if valid url is provided
    //! dispatch twitter error if statusId doesnt exist

    //https://twitter.com/user/status/1514548909249539 => 1514548909249539
    const statusId = query.split('/').slice(-1);

    //Avoid fetching the same tweet from the APIs
    //If the same statusId is already being displayed.
    if(query === previousQuery){
      return;
    }

    setPreviousQuery(query);
    //pass the statusId to the AnalyseTweet component
    return handleSubmit(statusId);
  }

  const getUser = () => {
    //pass the query to the AnalyseProfile component
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
    {/* {error && <Error message={error}/>} */}
    {children}
  </motion.div>
  )
}

export default Searchbar