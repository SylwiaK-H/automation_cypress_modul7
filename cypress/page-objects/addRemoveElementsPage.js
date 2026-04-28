const addElement = 'button[onclick="addElement()"]'

class AddRemoveElementsPage{
    showAddElementPage(){
        cy.get("#addremoveelements-content").invoke('show').should("be.visible")
    }
    addElement(){
        cy.get(addElement).click()
    }
    removeElement(){
        cy.get(".added-manually").should("exist").click().should("not.exist")
    }
}
export default AddRemoveElementsPage;