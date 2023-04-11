// TEMPLATE
/*
const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo {
	name = leoName + leoSurname
	balance = leoBalance
	access id = 47afb389-8014-4d0b-aff3-e40203d2107f
	age = 24
	address {
		number = leoNumber
		street = leoStreet
		postal-code = leoPostal
	}
}

const sarah {
	name = saraName + saraSurname
	age = 62
	access id = 6b279ae5-5657-4240-80e9-23f6b635f7a8
	balance = sarahBalance
	address {
		number = sarahNumber
		street = sarahStreet
		postal-code = sarahPostal
	}

console.log(leo, leo[address][postal-code])
console.log(sarah, sarah[address][postal-code])
*/


// MY CODE

/*
why did the original code not work?
-incorrect syntax for object literals
-assignment operators used for some key-value pairs instead of colons
-values with dashes were to be made strings by putting them in quotes; without quotes values were not read properly
-object values were not properly accessed in consol.log; quotes were missing in bracket notation
*/


const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: "R" + (-parseFloat(leoBalance)).toFixed(2),
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address : {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal
	}
}

const sarah = {
	ame: `${sarahName.trimEnd()} ${sarahSurname}`,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: "R" + (-parseInt(sarahBalance)).toFixed(2),
	address : {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal
	}
}

console.log(leo, leo['address']['postalCode'])
console.log(sarah, sarah['address']['postalCode'])