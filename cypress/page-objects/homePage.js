import Urls from "./urls"

const inputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const inputHeader = '#input-header'
const dropdownListTabHeader = '#dropdown-list-header'
const hoversHeader = '#hovers-header'


class HomePage{

    clikInputstab(){
        cy.get(inputsHeader).click()
    }

    clikCheckboxTab(){
        cy.get(checkboxHeader).click()
    }

    clikInputTab(){
        cy.get(inputsHeader).click()
    }

    clikDropdownListTab(){
        cy.get(dropdownListTabHeader).click()
    }

    clikHoversTab(){
        cy.get(hoversHeader).click()
    }

    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }

}

export default HomePage;