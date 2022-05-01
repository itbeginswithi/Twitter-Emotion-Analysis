const URL = process.env.TWITTER_API_URL;
const URLParams = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at,profile_image_url'

export default async function handler(req, res) {
  const statusId = req.query.statusId;
  
  try {
    const myHeaders = new Headers({});
    myHeaders.append('Authorization', `Bearer ${process.env.TWITER_API_TOKEN}`)
  
    let tweetData = await fetch(`${URL}/tweets?ids=${statusId}&${URLParams}`, {
      method: 'GET',
      headers: myHeaders
    });
    
    tweetData = await tweetData.json();
    res.status(200).json(tweetData);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}