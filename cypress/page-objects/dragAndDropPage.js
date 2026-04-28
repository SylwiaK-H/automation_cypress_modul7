const columnA = '#column-a'
const columnB = '#column-b'

class DragAndDropPage {
    dragColumnA() {
        cy.get(columnA)
        .trigger('mousedown', { button: 0 })

    cy.get(columnB)
        .trigger('mousemove', { force: true })
        .trigger('mouseup', { force: true })

    }

    dragColumnB() {
        cy.get(columnB)
        .trigger('mousedown', { button: 0 })

    cy.get(columnB)
        .trigger('mousemove', { force: true })
        .trigger('mouseup', { force: true })
    }
}
export default DragAndDropPage;