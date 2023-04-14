// TEMPLATE
/*
const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId.name || 'ID {futureId} not created yet')

copied = holidays.christmas
copied = { name: 'X-mas Day' }
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)
*/



// MY CODE

const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

// MY CODE
let correctDate
let isEarlier

holidays.futureId? console.log(holidays.futureId.name) : console.log(`ID ${futureId} not created yet`)


let copied = {
    name: 'X-mas Day' ,
    date: new Date(`25 December ${currentYear} 00:00`)
}


// copied = holidays.christmas
// copied = { 
//     name: 'X-mas Day' 
// }

correctDate = copied.date
correctDate.getHours(0, 0);
console.log(correctDate)

isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier === true) {
    holidays['6'].date = correctDate
    holidays['6'].name = 'X-mas'

    console.log(`ID change: ${holidays['6'].id}` != copied.id || copied.id)
    console.log(`Name change: ${holidays['6'].name}`)
    console.log(`Date change: ${(holidays['6'].date).toLocaleDateString('en-GB')}`)
}

const firstHolidayTimestamp = Math.min( 
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime()
)



const lastHolidayTimestamp = Math.max( /* getTime() returns amount of time from between the selected date of the object and January 1st, 1970 in milliseconds*/
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime()
)

console.log(firstHolidayTimestamp)
console.log(lastHolidayTimestamp)

const firstDate = new Date(firstHolidayTimestamp) /* new Date() converts milliseconds from firstHolidayTimestamp into an actual date*/
    console.log(firstDate)
const firstDay = firstDate.getDate() /*getDate() retrieves the number of the day converted from milliseconds*/
const firstMonth = (firstDate.getMonth()) + 1 /*counting starts from 0 */
    console.log(firstMonth)

const lastDate = new Date(lastHolidayTimestamp)
const lastDay = lastDate.getDate()
const lastMonth = (lastDate.getMonth()) + 1


console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)


const randomNumber = Math.round(Math.random() * 9)
    console.log(randomNumber)
const randomHoliday = new Date(holidays[randomNumber].date)

const randomDay = randomHoliday.getDate()
const randomMonth = (randomHoliday.getMonth()) + 1

    console.log(randomDay)
    console.log(randomMonth)

console.log(`${randomDay}/${randomMonth}/${currentYear}`)
