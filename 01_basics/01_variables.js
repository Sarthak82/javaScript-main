const accountId=144553
let accountEmail="Sarthak@gmail.com"
var accountPassword="123456" 
accountCity="Himachal"
let accountState;
/*
prefer not to use var
because of issue in block scope
and functional scope
*/

// accountId=10 //not allowed

accountEmail="sarthak123@gmail.com"
accountPassword="21212121"
accountCity="Mohali"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])