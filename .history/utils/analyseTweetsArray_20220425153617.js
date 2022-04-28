export async function analyseTweetsArray(tweetsData) {
    let newArr = [];
    
    await tweetsData.map(({tweettext}) => {
        // create a promise for each API call
        let text = tweet.text;
         new Promise((resolve, reject) => {
                fetch('/api/ibmWatson',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({tweet: text})
                })
                .then(response => response.json())
                .then(results => {
                    const slice = {...param[id], results}
                    // console.log(slice)
                    return newArr.push(slice)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    })
    return newArr
}