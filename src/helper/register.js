const fs = require('fs');
const is_reg = require('./is_reg');

function register(author) {
    if (is_reg(author.id)) {
        console.log("User already registered")
        return
    }
    usersjson = fs.readFileSync("./files/users.json","utf-8");
    if (usersjson != "" ){
        users = [JSON.parse(usersjson)]
        users.push(author)
        usersjson = JSON.stringify(users, null, 4)
    } else {
        usersjson = JSON.stringify(author,  null, 4)
    }
    
    fs.writeFile("./files/users.json", usersjson, (err) => {
        if (err) {
            throw err;
        }
        console.log("User registered");
    });
    console.log(author)

}

module.exports = register

