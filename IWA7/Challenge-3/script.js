// TEMPLATE
/*
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)
*/


// MY CODE

/*why did original code not work?
- template literals are being used with quotes and not backticks
-the 'R' string was inside the parseInt in the owed variable which returned the variable as NaN
*/

const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = 'R' + parseInt(leoBalance + sarahBalance)
const leo = `${leoName} ${leoSurname} (Owed: R${leoBalance})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R${sarahBalance})`
const total = "Total amount owed: " 
const result = divider + leo + sarah + divider + total + owed + divider

console.log(result)
