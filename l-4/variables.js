const accountId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId=2 // Not Allowed
accountEmail = "hc@gmail.com"
accountPassword = 428357072
accountCity = "Bangaluru"

console.log(accountId)

/* Prefer not
to use var because of
issue in block and functional scope*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])