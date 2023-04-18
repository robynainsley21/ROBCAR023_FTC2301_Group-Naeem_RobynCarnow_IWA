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
alert('is this working even')

/*
REQUIREMENTS


- first target all the html elements that are to be changed
- then set all their colors by using the variables of the targeted elements 
    and then setting their colors to the oject's key-values
*/

const first = document.getElementById('book1')
const firstStatus = first.querySelector('span.status')
const firstReserve = first.querySelector('button.reserve')
const firstCheckout = first.querySelector('button.checkout')
const firstCheckin = first.querySelector('.checkin')


const second = document.getElementById('book2')
const secondStatus = second.querySelector('span.status')
const secondReserve = second.querySelector('button.reserve')
const secondCheckout = second.querySelector('button.checkout')
const secondCheckin = second.querySelector('button.checkin')


const third = document.getElementById('book3')
const thirdStatus = third.querySelector('span.status')
const thirdReserve = third.querySelector('button.reserve')
const thirdCheckout = third.querySelector('button.checkout')
const thirdCheckin = third.querySelector('button.checkin')

firstCheckin.style.color = ''
firstStatus.style.color = STATUS_MAP.status.color
firstReserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
firstCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
firstCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'