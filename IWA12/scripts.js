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
const firstStatus = document.querySelector('.status')  
const firstReserve = document.querySelector('.reserve')  
const firstCheckout = document.querySelector('.checkout')  
const firstCheckin = document.querySelector('.checkin')

firstCheckin.style.color = ''
firstStatus.style.color = STATUS_MAP.overdue.color
 firstReserveStatus = STATUS_MAP.overdue.canReserve ? 'disabled' : 'enabled'
 firstCheckoutStatus = STATUS_MAP.overdue.canCheckout ? 'disabled' : 'enabled'
 firstCheckinStatus = STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled'


 
const secondRoot = document.getElementById('book2')
const secondStatus = document.querySelector('.status')
const secondReserve = document.querySelector('.reserve')
const secondCheckout = document.querySelector('.checkout')
const secondCheckin = document.querySelector('.checkin')

secondCheckin.style.color = ''
secondStatus.style.color = STATUS_MAP.reserved.color
const secondReserveStatus = STATUS_MAP.reserved.canReserve ? 'disabled' : 'disabled'
const secondCheckoutStatus = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
const secondCheckinStatus = STATUS_MAP.reserved.canCheckIn ? 'disabled' : 'disabled'



const thirdRoot = document.getElementById('book3')
const thirdStatus = thirdRoot.querySelector('.status')
const thirdReserve = thirdRoot.querySelector('.reserve')
const thirdCheckout = thirdRoot.querySelector('.checkout')
const thirdCheckin = thirdRoot.querySelector('.checkin')

thirdCheckin.style.color = ''
thirdStatus.style.color = STATUS_MAP.shelf.color
const thirdReserveStatus = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
const thirdCheckoutStatus = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
const thirdCheckinStatus = STATUS_MAP.shelf.canCheckIn ? 'disabled' : 'enabled'

