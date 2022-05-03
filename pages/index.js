import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import { Header, AnalyseProfile, AnalyseTweet } from '../container';
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
      {modalState && (
        createPortal(<TwitterTimeline/>, 
          document.getElementById("modal"))
      )}
      <Header/>
      <AnalyseProfile/>
      <AnalyseTweet/>
    </div>
  )
}

export default Home;