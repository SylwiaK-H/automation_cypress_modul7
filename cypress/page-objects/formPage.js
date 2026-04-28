import { faker } from '@faker-js/faker'

const firstNameInput = "#fname"
const lastNameInput = "#lname"
const submitButton = "#formSubmitButton"

class FormPage {
    showForm(){
        cy.get("#form-content").invoke('show').should('be.visible')
    }
    typeFirstName(){
        const randomName = faker.person.firstName()
        cy.get(firstNameInput).clear().type(randomName).should('have.value', randomName)
    }
    typeLastName(){
        const randomSurname = faker.person.lastName()
        cy.get(lastNameInput).clear().type(randomSurname).should('have.value', randomSurname)
    }
    clickSubmit(){
        cy.get(submitButton).should('be.visible').and('be.enabled').click()
        
    }
}
export default FormPage;