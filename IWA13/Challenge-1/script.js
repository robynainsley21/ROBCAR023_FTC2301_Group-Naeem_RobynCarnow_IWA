// TEMPLATE

/*
let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const = logCalc () => { 
    const isString = typeof calculated = 'numerical-string' 
    const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
    calculated === calculatedAsNumber + 1 
}

const = calcUser () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const = checkUser () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
*/



// MY CODE

/*
REQUIREMENTS:
- only change the three functions
- to be logged to the console: User: John (3)
*/

/*
why did the original code not work?
-  function expression names were after the equality operator instead of before
- parseNumber() is not a method; replace with parseInt() to convert 'calculated' from string to number
- 'logCalc' is not being called correctly; added () for callback

*/


let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'numericalString' 
    
    let calculatedAsNumber
    if (isString){
        calculatedAsNumber = parseInt(calculated)
    } else {
        calculatedAsNumber = calculated
    }

    calculated = calculatedAsNumber + 1 
}




const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()