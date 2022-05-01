import { useSelector } from 'react-redux';

import LoadingIcon from '../../../../assets/twitter-icon.gif';
import TweetBox from '../../../TweetBox/TweetBox';

const ScoredTweets = () => {
    const {tweets, tweetsAnalysis, author: {username}, showUserProfile, authors, tagName} = useSelector(state => state.tweetsTimeline);
    
    //* fetching tweets 
    
    //Tag related tweets
    if(tagName && tweets.length) {
        return (
            tweets.map((tweet, index) => {
                //tweetAnalysis: {results: [] || errorMessage, id: 'tweetId of the text analysed'} 
                const analysis = tweetsAnalysis?.filter(analysis => analysis.id === tweet.id);
                const author = authors?.filter((author) => author.id === tweet.author_id);

                return ( 
                    <TweetBox 
                        key={index}
                        tweetId={tweet.id}
                        tweetText={tweet.text}
                        tagName={tagName}
                        username= {author[0].username}  
                        userImage={author[0].profile_image_url}
                        createdAt={tweet.created_at}
                        showProfile={showUserProfile}
                        tweetAnalysis={analysis[0]?.results}
                        analysisError={analysis[0]?.results?.message?.message}
                        fetchingAnalysis={!analysis.length}
                    />
                )
            })
        )
    }

    return (
        <>
            { !tweets.length && <LoadingIcon/>}
            { tweets.length && (
                tweets.map((tweet, index) => {
                    //tweetAnalysis: {results: [] || errorMessage, id: 'tweetId of the text analysed'} 
                    const analysis = tweetsAnalysis?.filter(analysis => analysis.id === tweet.id);
        
                    return ( 
                        <TweetBox 
                            key={index}
                            tweetId={tweet.id}
                            tweetText={tweet.text}
                            username= {username}
                            createdAt={tweet.created_at}
                            showProfile={showUserProfile}
                            tweetAnalysis={analysis[0]?.results}
                            analysisError={analysis[0]?.results?.message?.message}
                            fetchingAnalysis={!analysis.length}
                        />
                    )
                })
            )}
        </>
    )
}

export default ScoredTweets;