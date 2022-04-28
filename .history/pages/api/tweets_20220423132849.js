// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const URL = 'https://api.twitter.com/2';
const URLParams = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at'

export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  
  try {
    const myHeaders = new Headers({});
    myHeaders.append('Authorization', 'Bearer AAAAAAAAAAAAAAAAAAAAAMhsbQEAAAAAlUTbetPFSiGXgfJzy6mMBQPnkpY%3Df41Bs2zFMBkH7rtV6tHqczQoe1i7obYoMXFoVpqGFkHY3zZVhP')
  
    const result = await fetch(`${URL}/tweets?ids=1516167738909249539`, {
      method: 'GET',
      headers: myHeaders
    });

    console.log(result);
  
    let data = await result.json();
  
    res.status(200).json({data});
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}