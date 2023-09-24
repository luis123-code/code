// antes de ES6
function newUser(user, age, country, uid) {
    return {
        user: user,
        age: age,
        country: country,
        id: uid
    }
}

// con object literals
function newUser(user, age, country, uid) {
    return {
        user,
        age,
        country,
        id: uid
    }
}