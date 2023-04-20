// TEMPLATE

/*
function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
*/



// MY CODE

/*
why did the original code not work?
- first two functions were meant to either be declared or written as expressions; changed them to expressions

-main problem lies with internal function
*/

const add = (a, b) => {
	return a + b 
}

const multiply = (a, b) => { 
	return a * b 
}

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const multiplied = this.multiply(added, this.internal.c)
	console.log(multiplied) 
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
