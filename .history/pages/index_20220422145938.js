import {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import {motion} from 'framer-motion';

import styles from '../styles/Home.module.scss'
import { Header, Search } from '../Sections';
import TwitterTimeline from '../components/modal/twitter-timeline/twitter-timeline';


// const animationOptions = { 
//   loop: true,
//   autoPlay: true,
//   animationData: woman,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// }

const Home = () => {
  const modalState = true;
  // const modalState = useSelector(state => state.modal.isVisible);
  
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
      <TwitterTimeline/>
    </div>
  )
}

export default Home;