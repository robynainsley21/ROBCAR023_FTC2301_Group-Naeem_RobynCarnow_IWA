let location = 'RSA'

const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let customers = 1
let currency = 'R'|| '$' 
let shipping



let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED


if (location === 'RSA') { 
	shipping === 400 && currency === 'R'
}

if (location === 'NAM'){
	shipping = 600 && currency === '$'
}else{
	shipping = 800
}

if (location === 'NK'){
	console.log(BANNED_WARNING)
}
 
let cost = shoes + toys + shirts + batteries + pens
const userCost = cost + shipping



if (cost >= 1000) {
	if(location === 'RSA'||'NAM'){
		if (customers === 1) {
			shipping = 0 
			console.log(userCost)
		}
	}
}else if(location === 'NK' && customers !== 1){
	console.log(FREE_WARNING) 
}





