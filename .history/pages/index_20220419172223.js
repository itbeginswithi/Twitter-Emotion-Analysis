import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import {motion} from 'framer-motion';

import styles from '../styles/Home.module.scss'
import {joy} from '../constants/emotionIcons';
import woman from '../assets/lottie/woman-twitter.json';


const animationOptions = { 
  loop: true,
  autoPlay: true,
  animationData: woman,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Home = () => {
  return (
    <>

    </>
  )
}

export default Home;