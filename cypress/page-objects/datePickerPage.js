const dateInput = 'input[type="date"]'

class DatePickerPage{
    inputTheDate(){
        cy.get(dateInput).click().clear().type('2020-07-20').should('have.value', '2020-07-20')
    }
}
export default DatePickerPage;