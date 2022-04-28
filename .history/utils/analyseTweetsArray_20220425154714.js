export async function analyseTweetsArray(tweetsData) {
    let newArr = [];
    
    await tweetsData.map(({text}, id) => {
        // create a promise for each API call
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
                    const slice = {...tweetsData[id], results}
                    console.log(slice)
                    return newArr.push(slice)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    })
    
    return newArr
}