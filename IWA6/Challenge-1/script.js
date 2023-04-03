// TEMPLATE
/*const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
*/



// MY CODE
//primary validation should fail (resolving to false, however since the secondary number is correct it should pass (resolving to true).
const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line
let number = '12'


const primaryValid = typeof number === typeof primaryPhone 
const secondaryValid = typeof number === typeof secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )