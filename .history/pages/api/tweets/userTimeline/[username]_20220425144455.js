const URL = 'https://api.twitter.com/2'
const getUserTimeline = async (req, res) => {
    const username = req.query.username;

    console.log(username);
    //get userId
    const userData = (await fetch(`${URL}/users/by?usernames=${username}`)).json();
    console.log(userData);
}

export default getUserTimeline;