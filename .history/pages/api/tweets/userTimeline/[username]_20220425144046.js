export default getUserTime = async (req, res) => {
    const username = req.query.username;

    //get userId
    await fetch(`https://api.twitter.com/2/users/by?usernames=elonmusk`)
}