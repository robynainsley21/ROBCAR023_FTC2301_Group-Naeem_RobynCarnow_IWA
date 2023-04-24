// TEMPLATE

/*
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}

const result = []

const extractBiggest = () => {
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

*/

// MY CODE

/*
why did the original code not work?
- arrays were not being called properly

REQUIREMENTS
- Edit only the code between the two comment lines
- The code must compare the last value of each provided array
- The largest value must be removed from it’s array
- The largest value must be added to the result array
- result : [10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9] 
*/

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]
    console.log(first)
const second = data.lists[1][1] 
    console.log(second)
const third = data.lists[2][1] 
    console.log(third)


const result = []

// const extractBiggest = () => {
// 	if (first[0] > second[0] ) {
// 		return first
// 	}

// 	if (third[0] > second[0]) {
// 		return second
// 	}
	
// 	return third
// }


const extractBiggest = () => {
	if (first[0] > second[0] && third[0] > 1) {
		return result.push(first, second, third)
	}

	
	
	
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)