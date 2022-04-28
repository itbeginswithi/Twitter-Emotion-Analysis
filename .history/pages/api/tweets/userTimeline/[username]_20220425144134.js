const URL = 'https://api.twitter.com/2'
export default getUserTime = async (req, res) => {
    const username = req.query.username;

    //get userId
    await fetch(`${URL}/users/by?usernames=${}`)
}