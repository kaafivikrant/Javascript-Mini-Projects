const register = function(username){
    console.log(`User ${username} has been registered`);
}

const login = function(username, password){
    console.log(`${username} have ${password}`);
}

module.exports = {
    register: register,
    login: login

    //register,
    //login
};