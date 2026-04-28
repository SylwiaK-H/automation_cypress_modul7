import { faker } from '@faker-js/faker'

const keyPressed = "#target"
const keyPressedResult = '#keyPressResult'

class KeyPressesPage{
    showKeyPressesForm(){
        cy.get('#keypresses-content').invoke('show').should('be.visible')
    }
    pressKeyToSeeInput(){
        const randomKey = faker.string.alphanumeric({length:1}).toUpperCase()
        cy.get(keyPressed).type(randomKey)
        cy.get(keyPressedResult).should('contain.text', `You entered: ${randomKey}`)
    }
}
export default KeyPressesPage;