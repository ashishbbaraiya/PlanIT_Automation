/// <reference types="cypress" />
 
import BasePage from "./BasePage"
 
class HomePage extends BasePage {
 
   get ContactLink(){
      return cy.get('a[href="#/contact"]')
   }

   get ShopLink(){
      return cy.get('#nav-shop a[href="#/shop"]')
   }
}
 
export default HomePage