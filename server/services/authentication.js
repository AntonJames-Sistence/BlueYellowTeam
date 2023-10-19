const jwt = require('jsonwebtoken')

const SECRET_KEY = "carlos"

function authenticateRequest(req){
    const {body} = req
    //ensure the jwt sent in request is signed with your secret key
    console.log("CARLOS", req)
    jwt.decode
    token.decrypt()
    checkDatabaseToValidate(tokenInfo.username, tokeinfo.password)
    //TODO make a secret key

}

function login(req){
    const {body} = req

    //get user data from db, look up via username or email
    
    //confirm that the password hash matches the password form hashed as well

    //assign jwt
    const token = jwt.sign({username: "Carlos"}, SECRET_KEY)
    console.log(token)

    //allow login
    return token
}

module.exports = {
    authenticateRequest,
    login
}