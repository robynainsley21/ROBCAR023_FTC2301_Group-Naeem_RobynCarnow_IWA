// TEMPLATE

/*
const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance)
*/


// MY CODE
/*
REQUIREMENTS
-The taxable amount should be subtracted from the salary before expenses are calculated
-The total should be the result of the after-tax amount with all expenses subtracted
-rent amount (matching key) should = size and lodging
-log as single number value, two decimals
*/



const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance)