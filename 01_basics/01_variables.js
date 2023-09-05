const accountId = 144553
let accountEmail = "sushil@google.com"
var accountPassword = "12345@12345!"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

/*
{
    scope
    local scope
    global scope
}

prefer not to use var
because of issues in block scope and functional scope

*/

accountEmail = "Suraj@g.com"
accountPassword = "151515"
accountCity = "ktm"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])