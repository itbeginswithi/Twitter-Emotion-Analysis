const URL = 'https://api.twitter.com/2'
const getUserTimeline = async (req, res) => {
    const username = req.query.username;

    const myHeaders = new Headers({});
    myHeaders.append('Authorization', 'Bearer AAAAAAAAAAAAAAAAAAAAAMhsbQEAAAAAlUTbetPFSiGXgfJzy6mMBQPnkpY%3Df41Bs2zFMBkH7rtV6tHqczQoe1i7obYoMXFoVpqGFkHY3zZVhP')
    
    //get userId
    console.log('you are here');
    

    let userData = await (await fetch(`${URL}/users/by?usernames=${username}`, {
        method: 'GET',
        headers: myHeaders
    })).json();
    console.log('wait a bit');
    //{data: [ { id: '444444', name: 'Full NAME', username: 'abcdefg' } ]}
    const userId = userData.data[0].id;
    console.log(userId);
}

export default getUserTimeline; 