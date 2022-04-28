const URL = 
export default getUserTime = async (req, res) => {
    const username = req.query.username;

    //get userId
    await fetch(`/users/by?usernames=elonmusk`)
}