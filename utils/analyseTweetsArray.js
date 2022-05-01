export async function analyseTweetsArray(tweetsData) {
    let analysedTweets = [];

    await Promise.all(tweetsData.map(async ({text, id}) => {
        // create a promise for each API call

        await new Promise((resolve, reject) => {
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
                const slice = {id, results};
                analysedTweets.push(slice);
                resolve();
            })
            .catch(error => {
                console.error(error);
            })
        })
    }))
    
    return analysedTweets;
}