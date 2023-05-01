
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }
   return result
}

const createData = () => {
    const current = new Date() //missing ()        
    current.setDate(1) //sets the day of the month of a date

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(6)//creates an array of amount of weeks in month; changed from 5 to 6 to accomodate months that start on a sunday
    const days = createArray(7)
    let value = [] //changed to an empty array since values are meant to be pushed into it
    //what does value actually do??

    for (let weekIndex of weeks) { /* changed from for in to for of because for of operates on values sourced from an iterable object (in this case, an array) */
        value.push((parseInt(weekIndex) + 1), days) //editor indicated that weekIndex was to be returned as a string
        // = [
        //     week: weekIndex + 1,
        //     days: [],
        // ]

        for (let dayIndex of days) {
            value = dayIndex - startDay //amount of days in array subtracts amount of days in current month; what does that tell you?
            const isValid = days > 0 && days <= daysInMonth

            result[dayIndex].days = {
                dayOfWeek: dayIndex + 1,
                value: isValid && days,
            }
        }
    }
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
    return result
}

const createHtml = (data) => {
    const result = ''

    for (const [week, days] of  data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (const [dayOfWeek, value] in days) {
            let classString = document.getElementsByClassName('table__cell')
            
		    const isToday = new Date() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7
            const isAlternate = week / 2

           

			if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend`
            if (isAlternate) classString = `${classString} table__cell_alternate`
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}
// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)