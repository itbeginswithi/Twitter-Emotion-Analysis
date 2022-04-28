const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

export default async function handler(req, res) {

    //The service wrapper
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2020-08-01',
      authenticator: new IamAuthenticator({
        apikey: 'YVbP7LZOSI7OXzp0JHYJkNjz9xFoixSObHNEVPUJbEPf',
      }),
      serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/3200ce04-f24e-4d84-b489-883fd44c7bfd',
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
          let watsonResponse = await naturalLanguageUnderstanding.analyze(options)
          //{joy: 0.6, anger: 0.2} => [[joy: 0.6], [anger: 0.2]]
          const analysis = Object.emotion(watsonResponse.result.emotion.document.emotion)
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