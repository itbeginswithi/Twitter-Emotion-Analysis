export async function analyseTweetsA(param) {
    let newArr = [];
    
    await param.map((tweet, id) => {
        // create a promise for each API call
        let text = tweet.text;
         new Promise((resolve, reject) => {
                fetch('/api/test',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({phrase: text})
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