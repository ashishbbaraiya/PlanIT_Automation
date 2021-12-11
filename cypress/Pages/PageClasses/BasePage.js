/// <reference types="cypress" />
 
class BasePage {
 
    launchApplication(){
     cy.visit(Cypress.env('login_url'))
    }
}
 
export default BasePage 