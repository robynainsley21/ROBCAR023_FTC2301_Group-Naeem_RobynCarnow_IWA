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

const first = {
    firstRoot: document.getElementById("book1"),
    firstStatus : firstRoot.querySelector('.status'),  
    firstReserve : firstRoot.querySelector('.reserve'),  
    firstCheckout : firstRoot.querySelector('.checkout'),  
    firstCheckin : firstRoot.querySelector('.checkin')
}
 
const second = {
    secondRoot : document.getElementById('book2'),
    secondStatus : secondRoot.querySelector('.status'),
    secondReserve : secondRoot.querySelector('.reserve'),
    secondCheckout : secondRoot.querySelector('.checkout'),
    secondCheckin : secondRoot.querySelector('.checkin')
}

const third = {
    thirdRoot: document.getElementById('book3'),
    thirdStatus: thirdRoot.querySelector('.status'),
    thirdReserve: thirdRoot.querySelector('.reserve'),
    thirdCheckout: thirdRoot.querySelector('.checkout'),
    thirdCheckin: thirdRoot.querySelector('.checkin')
}



first.firstCheckin.style.color = none
first.firstStatus.style.color = STATUS_MAP.status.color
first.firstReserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
first.firstCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
first.firstCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

second.secondCheckin.color = none
second.secondStatus.style.color = STATUS_MAP.status.color
second.secondReserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
second.secondCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
second.secondCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

third.thirdCheckin.color = none
third.thirdStatus.style.color = STATUS_MAP.status.color
third.thirdReserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
third.thirdCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
third.thirdCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

