// TEMPLATE

/*
const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending
*/



// MY CODE

/*
REQUIREMENTS
- none of the 'Loading...' prompts are replaced with the actual JavaScript values
- goal is to ensure that each instance of 'Loading...' is swapped out with the value from the data attributes instead

/*why is the code not working?
- incorrect naming convention (variables start with numbers)
*/


const oneRoot = document.querySelector(order1)
const oneBiscuits = document(biscuits)
const oneDonuts = document(donuts)
const onePancakes = document(pancakes)
const oneStatus = document(status)

const twoRoot = document(order2)
const twoBiscuits = document(biscuits)
const twoDonuts = document(donuts)
const twoPancakes = document(pancakes)
const twoStatus = document(status)

const threeRoot = document(order3)
const threeBiscuits = document(biscuits)
const threeDonuts = document(donuts)
const threePancakes = document(pancakes)
const threeStatus = document(status)

oneBiscuits= oneRoot.biscuits
oneDonuts = oneRoot.donuts
onePancakes = oneRoot.pancakes
oneStatus = oneRoot.status ? Delivered : Pending

twoBiscuits= twoRoot.biscuits
twoDonuts = twoRoot.donuts
twoPancakes = twoRoot.pancakes
twoStatus = twoRoot.status ? Delivered : Pending

threeBiscuits= threeRoot.biscuits
threeDonuts = threeRoot.donuts
threePancakes = threeRoot.pancakes
threeStatus = threeRoot.status ? Delivered : Pending
