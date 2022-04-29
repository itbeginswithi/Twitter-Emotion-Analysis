import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head'
import {motion} from 'framer-motion';

import styles from '../styles/Home.module.scss'
import { Header, Search } from '../Sections';
import TwitterTimeline from '../components/modal/twitter-timeline/twitter-timeline';

const Home = () => {
  const modalState = useSelector(state => state.tweetsModal.isOpen);
  
  useEffect(() => {  
    if(modalState){
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "scroll"
    }
  }, [modalState])

  return (
    <div style={{width: '100%'}}>
      <Header/>
      <Search/>
      {modalState && <TwitterTimeline/>}
    </div>
  )
}

export default Home;