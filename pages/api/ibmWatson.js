const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const IBM_WATSON_API = process.env.IBM_WATSON_API_KEY;
const IBM_WATSON_URL = process.env.IBM_WATSON_URL;

export default async function handler(req, res) {
  //The service wrapper
  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-08-01',
    authenticator: new IamAuthenticator({
      apikey: IBM_WATSON_API,
    }),
    serviceUrl: IBM_WATSON_URL,
  });

  let text = req.body.tweet;

  // https://cloud.ibm.com/apidocs/natural-language-understanding?code=node#emotion
  const options = {
    text,
    features: {
      emotion: {},
    },
  };

  
  
  async function analyzeTweet(options) {
    try {
        let watsonResponse = await naturalLanguageUnderstanding.analyze(options);

        //{joy: 0.6, anger: 0.2} => [[joy: 0.6], [anger: 0.2]]
        const analysis = Object.entries(watsonResponse.result.emotion.document.emotion);
        
        return res.status(200).json(analysis);
    }catch (error) {
        console.log(error);
        res.status(400).send({
            message: error
        });
    }
  }


  analyzeTweet(options);
}