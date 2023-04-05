01111111111// TEMPLATE
/*
const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!")
*/

// MY CODE

//why original code did not work: quotes should not be used with template literals, instead backticks should be used; missing $ before nickname var

const nickname = 'Timmy'
const firstname = 'Timothy'     

if(nickname){
    console.log(`Good morning, ${nickname}!`)
}else{
    console.log('Good morning!')
}

// const nickname = undefined
// const firstname = undefined     

// if(nickname){
//     console.log(`Good morning, ${nickname}!`)
// }else if(nickname && firstname === undefined){
//     console.log('Good morning!')
// }
