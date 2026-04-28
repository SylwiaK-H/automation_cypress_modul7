import Urls from "./urls"

const inputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const inputHeader = '#input-header'
const dropdownListTabHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const addAndRemoveElements = '#addremoveelements-header'
const basicAuthHeader = "#basicauth-header"
const formHeader = "#form-header"
const iFrameHeader = '#iframe-header'
const statusCodeHeader = '#statuscodes-header'
const keyPressesHeader = '#keypresses-header'
const dragAndDropHeader = '#draganddrop-header'
const datePickerHeader = '#datepicker-header'


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

    clickAddAndRemoveElementsHeader(){
        cy.get(addAndRemoveElements).click()
    }

    clickBasicAuthHeader(){
        cy.get(basicAuthHeader).click()
    }

    clickFormHeader(){
        cy.get(formHeader).click()
    }

    clickiFrameHeader(){
        cy.get(iFrameHeader).click()
    }

    clickStatusCodeHeader(){
        cy.get(statusCodeHeader).click()
    }

    clickKeyPressesHeader(){
        cy.get(keyPressesHeader).click()
    }

    clickDragAndDropHeader(){
        cy.get(dragAndDropHeader).click()
    }

    clickDatePickerHeader(){
        cy.get(datePickerHeader).click()
    }

}

export default HomePage;