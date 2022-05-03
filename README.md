This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Twitter Emotion Analysis

TEA is a webapp, built with NextJS, that allows you to see the emotion analysis (Joy, Sadness, Anger, Fear, Disgust) of tweets from a user's timeline, select tags, or a single tweet.

## API Reference

#### Get tweet by statusId

```http
  GET /api/tweets/[statusId]
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `statusId` | `string` | **Required**. Id of tweet to fetch |

#### Get twitter user's timeline

```http
  GET /api/tweets/userTimeline/[username]
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. |

#### Get tag related tweets

```http
  GET /api/tweets/byTag/[tag]
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag`      | `string` | **Required**.|

#### Analyse Tweets with IBM's NLU Natural Language Understanding API
```http
  POST /api/ibmWatson
```

| Credentials | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apikey` | `string` | **Required**. Your API key |
| `serviceUrl` | `string` | **Required**. NLU URL |


#### add(num1, num2)

Takes two numbers and returns the sum.


## Environment Variables

To run this project, you will need to add the following 
environment variables to your .env.local file

`TWITER_API_TOKEN`

`TWITTER_API_URL = https://api.twitter.com/2`

`IBM_WATSON_API_KEY`

`IBM_WATSON_URL`


## Run Locally

Clone the project

```bash
  git clone https://github.com/itbeginswithi/Twitter-Emotion-Analysis.git
```

Go to the project directory

```bash
  cd Twitter-Emotion-Analysis
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```