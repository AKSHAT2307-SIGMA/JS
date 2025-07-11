const accountId = 123456
let emailId = "Akshat@gmail.com"
var password = "12344"
accountCity = "Moradabad"
let accountState;

//accountId = 2 // not Allowed

emailId = "Krishna@gmail.com"
password = "00011"
accountCity = "Greater Noida"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([emailId, password, accountCity, accountId])
