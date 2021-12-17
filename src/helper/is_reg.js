const fs = require('fs');

function is_reg(id) {
    //Check if user with ID id is registered
    usersjson = fs.readFileSync("./files/users.json","utf-8");
    if (usersjson != "" ) {
        users = JSON.parse(usersjson)
        if (!Array.isArray(users)) {
            if (users.id == id) {
                return true
            } else {
                return false
            }
        }
        for (user of users) {
            if (user.id == id) {
                return true
            }
        }
    } else {
        console.log("No registered users")
        return false
    }
    console.log("User not registered")
    return false
}

module.exports = is_reg