const inputUsername = "#ba_username"
const inputPassword = "#ba_password"
const loginButton = "button"

class BasicAuthPage{
    showAuthForm(){
        cy.get('#basicauth-content').invoke('show').should('be.visible')
    }
    typeUsernameToAuth(){
        cy.get(inputUsername).clear().type('admin').should('have.value', 'admin')
    }
    typePasswordToAuth(){
        cy.get(inputPassword).clear().type('admin').should('have.value', 'admin')
    }
    clicklogintoAuth(){
        cy.get(loginButton).contains('Login').should('be.visible').and('be.enabled').click()
    }
}
export default BasicAuthPage;