import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import {motion} from 'framer-motion';

import styles from '../styles/Home.module.scss'
import { Header, Search } from '../Sections';


// const animationOptions = { 
//   loop: true,
//   autoPlay: true,
//   animationData: woman,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// }

const Home = () => {
  return (
    <div style={{width: '100%'}}>
      <Header/>
      <Search/>
      TwitterTimeline
    </div>
  )
}

export default Home;