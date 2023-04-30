
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
        return result.push(i)
    }

}

const createData = () => {
    const current = new Date() //missing ()        
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)
    let value = [] //changed to an empty array since values are being pushed into it as an array

    for (let weekIndex in weeks) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]

        for (let dayIndex in days) {
            value = dayIndex - startDay
            const isValid = days > 0 && days <= daysInMonth

            result[weekIndex].days = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
            }]
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
    let result = ''

    for (const [week, days] of  data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (const dayOfWeek, value in days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

			if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
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