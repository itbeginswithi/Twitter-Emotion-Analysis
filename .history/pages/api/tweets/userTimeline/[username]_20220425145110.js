const URL = 'https://api.twitter.com/2'
const getUserTimeline = async (req, res) => {
    const username = req.query.username;

    const myHeaders = new Headers({});
    myHeaders.append('Authorization', 'Bearer AAAAAAAAAAAAAAAAAAAAAMhsbQEAAAAAlUTbetPFSiGXgfJzy6mMBQPnkpY%3Df41Bs2zFMBkH7rtV6tHqczQoe1i7obYoMXFoVpqGFkHY3zZVhP')
    //get userId
    let userData = await (await fetch(`${URL}/users/by?usernames=${username}`, {
        method: 'GET',
        headers: myHeaders
    })).json();

    const userId = data.data[0]
}

export default getUserTimeline; 