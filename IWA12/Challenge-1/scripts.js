// TEMPLATE

/*
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
*/



// MY CODE
/*
why did the original code not work?
-  elements from html were not properly accessed by calling methods on the dom
- 

/*

REQUIREMENTS
Please ensure that the following works correctly:

- Enable/disable buttons based on the status/properties in the STATUS_MAP object.
- Buttons are only allowed to be black and grayscale (no colour is allowed).
- The colour of the status indicator text should correspond to the values in STATUS_MAP.
*/

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

/*
REQUIREMENTS


- first target all the html elements that are to be changed
- then set all their colors by using the variables of the targeted elements 
    and then setting their colors to the oject's key-values
*/


const firstRoot = document.getElementById('book1')
const firstStatus = firstRoot.getElementsByClassName('status')[0]
let firstReserve = firstRoot.getElementsByClassName('reserve')[0]
const firstCheckout = firstRoot.getElementsByClassName('checkout')[0] 
const firstCheckin = firstRoot.getElementsByClassName('checkin')[0]
 
const secondRoot = document.getElementById('book2')
const secondStatus = secondRoot.getElementsByClassName('status')[0]
const secondReserve = secondRoot.getElementsByClassName('reserve')[0]
const secondCheckout = secondRoot.getElementsByClassName('checkout')[0]
const secondCheckin = secondRoot.getElementsByClassName('checkin')[0]

const thirdRoot = document.getElementById('book3')
const thirdStatus = thirdRoot.querySelector('.status')
const thirdReserve = thirdRoot.querySelector('.reserve')
const thirdCheckout = thirdRoot.querySelector('.checkout')
const thirdCheckin = thirdRoot.querySelector('.checkin')



firstCheckin.style.color = ''
firstStatus.style.color = STATUS_MAP.overdue.color
// firstReserve = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled'
// firstCheckout = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled'
// firstCheckin = STATUS_MAP.overdue.canCheckIn === 'true' ? 'enabled' : 'disabled'

secondCheckin.style.color = ''
secondStatus.style.color = STATUS_MAP.reserved.color
// console.log(secondStatus.style.color)
// const secondReserveStatus = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
// const secondCheckoutStatus = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
// const secondCheckinStatus = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'

thirdCheckin.style.color = ''
thirdStatus.style.color = STATUS_MAP.shelf.color
// const thirdReserveStatus = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
// const thirdCheckoutStatus = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
// const thirdCheckinStatus = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'

