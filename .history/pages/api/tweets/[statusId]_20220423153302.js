// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const URL = 'https://api.twitter.com/2';
const URLParams = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at,profile_image_url'

export default async function handler(req, res) {
  const statusId = req.query.statusId;
  
  try {
    const myHeaders = new Headers({});
    myHeaders.append('Authorization', 'Bearer AAAAAAAAAAAAAAAAAAAAAMhsbQEAAAAAlUTbetPFSiGXgfJzy6mMBQPnkpY%3Df41Bs2zFMBkH7rtV6tHqczQoe1i7obYoMXFoVpqGFkHY3zZVhP')
  
    const result = await fetch(`${URL}/tweets?ids=${statusId}&${URLParams}`, {
      method: 'GET',
      headers: myHeaders
    });
  
    let data = await result.json();

    fetch('./')
  
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}