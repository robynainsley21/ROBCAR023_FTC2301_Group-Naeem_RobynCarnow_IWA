import { createOrderData } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */

const handleDragOver = (event) => { //the event might be equal to the listener; the function looks for where the (event) came from and updates the dom where it did
    event.preventDefault(); //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    const path = event.path || event.composedPath() //dont change this; it can be set to the first value if returned as true
    let column = null

    for (const element of path) {//for every item of path (element) the following runs
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}

const handleDragEnd = (event) => {}


const handleHelpToggle = (event) => {
   if(html.help.overlay) html.help.overlay.setAttribute('open', true ) //overlay views the popup

   //cannot set html.help.overlay.setAttribute open to true, has to make help button reappear
    if(html.help.cancel)html.help.cancel.addEventListener(
        'click',
        () => {
            html.help.overlay.close()
        }
    )    
}

const handleAddToggle = (event) => {
    if(html.add.overlay) html.add.overlay.setAttribute('open', true)

    if(html.add.cancel) html.add.cancel.addEventListener(
        'click', 
        () => {
            html.add.overlay.close()
        }
    )    
}

//creating an document piece of props from data
const handleAddSubmit = (event) => {    
    const propsData = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: 'ordered'
    }

    const orderData = createOrderData(propsData)
    const orderPlacement = createOrderHtml(props)

    const orderedColumn = document.querySelector('[data-column="ordered"]')
    return orderedColumn.appendChild(orderPlacement)


}



const handleEditToggle = (event) => {
    // if (html.add.edit.overlay) html.add.edit.overlay.setAttribute('open', true)
}

const handleEditSubmit = (event) => {}

const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}