const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}

console.log(users.gndx.country)             // MX
console.log(users.gndx.age)                 // undefined
console.log(users.bebeloper.country);       // TypeError
console.log(users.bebeloper?.country);      // undefined