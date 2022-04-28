// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const URL = 'https://api.twitter.com/2/';
const URLParams = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  const result = fetch(`${URL}/`)
}