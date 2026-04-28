import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"
import AddRemoveElementsPage from "../page-objects/addRemoveElementsPage"
import BasicAuthPage from "../page-objects/basicAuthPage"
import FormPage from "../page-objects/formPage"
import iFramePage from "../page-objects/iFramePage"
import StatusCodePage from "../page-objects/statusCodePage"
import KeyPressesPage from "../page-objects/keyPressesPage"
import DragAndDopPage from "../page-objects/dragAndDropPage"
import DatePickerPage from "../page-objects/datePickerPage"



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

    it('test add and remove elements', () => {

        const homePage = new HomePage()
        homePage.clickAddAndRemoveElementsHeader()

        const addElementPage = new AddRemoveElementsPage();
        addElementPage.showAddElementPage()
        addElementPage.addElement()
        addElementPage.removeElement()
    })

    it('test basic auth', () => {

        const homePage = new HomePage()
        homePage.clickBasicAuthHeader()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.showAuthForm();
        basicAuthPage.typeUsernameToAuth();
        basicAuthPage.typePasswordToAuth();
        basicAuthPage.clicklogintoAuth()
    })

    it('test form', () => {

        const homePage = new HomePage()
        homePage.clickFormHeader()

        const formPage = new FormPage();
        formPage.showForm()
        formPage.typeFirstName()
        formPage.typeLastName()
        formPage.clickSubmit()
    })

    it('test iFrame buttons', () => {

        const homePage = new HomePage()
        homePage.clickiFrameHeader()

        const iFrame = new iFramePage();
        iFrame.iFrameButton1()
        iFrame.iFrameButton2()
    })

    it('test status codes', () => {

        const homePage = new HomePage();
        homePage.clickStatusCodeHeader()

        const statusCode = new StatusCodePage();
        statusCode.checkStatusLink()
        statusCode.checkStatusCode200()
        statusCode.checkStatusCode305()
        statusCode.checkStatusCode404()
        statusCode.checkStatusCode500()
    })

    it('test key presses form', () => {

        const homePage = new HomePage();
        homePage.clickKeyPressesHeader()

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.showKeyPressesForm()
        keyPressesPage.pressKeyToSeeInput()
    })

    it('test drag and drop', ()=>{

        const homePage = new HomePage();
        homePage.clickDragAndDropHeader()

        const dragAndDrop = new DragAndDopPage();
        dragAndDrop.dragColumnA()
        dragAndDrop.dragColumnB()
    })

    it('test date picker', ()=>{

        const homePage = new HomePage();
        homePage.clickDatePickerHeader()

        const datePicker = new DatePickerPage();
        datePicker.inputTheDate()
    })

})
