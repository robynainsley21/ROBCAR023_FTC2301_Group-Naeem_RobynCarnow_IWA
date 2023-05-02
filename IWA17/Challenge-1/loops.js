
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
    const current = new Date()
    current.setDate(1)

    console.log(current)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)

    console.log(days)
    console.log(daysInMonth)

    let value = null

    for (const weekIndex of weeks) {
        value = {
            week: weekIndex + 1,
            days: []
        }

        for (const dayIndex of days) { /* for every item in the array of days, the following is happening */
            value = dayIndex - startDay
            const isValid = days > 0 && days <= daysInMonth

            console.log(isValid)

            result[weekIndex].days = {
                dayOfWeek: dayIndex + 1,
                value: isValid && days,
            }
        }
    }
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td>
            ${classString}
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