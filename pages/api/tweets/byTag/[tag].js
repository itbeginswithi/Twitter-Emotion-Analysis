const URL = process.env.TWITTER_API_URL;
const URLParams = 'tweet.fields=text,withheld,author_id,created_at&user.fields=profile_image_url&expansions=author_id'

const tweetsByTag = async (req, res) => {
    const tag = req.query.tag;

    try {
        const headers = new Headers({});
        headers.append('Authorization', `Bearer ${process.env.TWITER_API_TOKEN}`);
    
        let tweets = await (await fetch(`${URL}/tweets/search/recent?${URLParams}&query=${tag}`, {
            method: 'GET',
            headers
        })).json();
        
        res.status(200).json(tweets);
    } catch (error) {
        res.status(400).json(error);
    }
}

export default tweetsByTag; 