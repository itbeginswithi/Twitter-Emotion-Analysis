const URL = process.env.TWITTER_API_URL;
const URLParams = 'tweet.fields=created_at,id&expansions=author_id&user.fields=created_at,profile_image_url&exclude=replies,retweets&max_results=15'

const getUserTimeline = async (req, res) => {
    const username = req.query.username;

    try {
        const headers = new Headers({});
        headers.append('Authorization', `Bearer ${process.env.TWITER_API_TOKEN}`);
    
        //get userId
        let userData = await (await fetch(`${URL}/users/by?usernames=${username}`, {
            method: 'GET',
            headers
        })).json();
        
        //userData = {data: [ { id: '444444', name: 'Full NAME', username: 'abcdefg' } ]}
        const userId = userData.data[0].id;
    
        //fetch UserTimeline
        const userTimeline = await(await fetch(`${URL}/users/${userId}/tweets?${URLParams}`, {
            method: 'GET',
            headers
        })).json();
        
        res.status(200).json(userTimeline);
    } catch (error) {
        res.status(400).json(error);
    }
}

export default getUserTimeline; 