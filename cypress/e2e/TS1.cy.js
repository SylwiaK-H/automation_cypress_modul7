import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"


describe('my first scenario', () => {

    beforeEach (() => {
      cy.visit('/');  
    })

    it('test inputs', function () {

        const homePage = new HomePage()
        homePage.clikInputstab()

        const inputPage = new InputPage()
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()

    })

    it('test checbox', function () {

        const homePage = new HomePage()
        homePage.clikCheckboxTab()

        const checkboxPage = new CheckboxPage()
        checkboxPage.checkFirstCheckbox()
        checkboxPage.unecheckLastCheckbox()
    })

})
