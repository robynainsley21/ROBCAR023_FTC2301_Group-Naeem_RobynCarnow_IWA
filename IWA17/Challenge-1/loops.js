
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
    current.setDate(1) //sets starting day of the week as Monday

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(6)
    const days = createArray(7)
    let value = null //values to be added later

    let day = 0 - startDay //determines which day is the starting day

    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) {/* changed from for of to regular for loop; loops through each loop */
        value = {
            week: weekIndex + 1,
            days: []
        }

        for (let dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) { /* for every week, the days are looped through */
           day ++
            value = dayIndex - startDay
            const isValid = day > 0 && day <= daysInMonth //as long as the amount of day is more that 0 but less that total amount of days in current month


            value.days.push({ 
                dayOfWeek: dayIndex, /* days to be added to the array from right to left as the they are pushed */
                value: isValid ? day : ''
            })
        }
        result.push(value)
    }
    return value
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td class=${classString}>            
            ${value}
        </td>

        ${existing}
    `
    return result
    
}

const createHtml = (data) => {
    const result = '' //to be changed later in the function

    for (let j = 0; j < data.length; j++) {
        let inner = ""
    
        const days = data[j].days //retrieves the days of the current week
        for (let k = days.length - 1; k>=0; k--) { /* checks if the current day = days' value in k' index */
            let classString ='class = "table__cell'
            
		    const isToday = new Date().getDate() === days[k].value
            const isWeekend = days[k].dayOfWeek === 0 || days[k].dayOfWeek === 6
            const isAlternate = data[j].week % 2 === 0

           

			if (isToday) classString =  classString += 'table__cell_today'
            if (isWeekend) classString = classString += 'table__cell_weekend'
            if (isAlternate) classString = classString += 'table__cell_alternate'
            classString += '"'

            //adding a cell for current day to html string
            inner = addCell(inner, classString, days[k].value)
        }
        //addind a cell for the current week number
        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${data[j].week}`)

        //adding a row to the result string which contains the cells of current week
        result += `<tr>${inner}</tr>`
    }
    return result
}
// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)