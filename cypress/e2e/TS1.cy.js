import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"


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

        const homePage = new HomePage();
        homePage.clikCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.unecheckLastCheckbox()
    })

    it('test dropdown list', function () {

        const homePage = new HomePage();
        homePage.clikDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hovers', function () {

        const homePage = new HomePage()
        homePage.clikHoversTab()

        const hoversPage = new HoversPage()
        hoversPage.hoverOverElement()
    })

})
