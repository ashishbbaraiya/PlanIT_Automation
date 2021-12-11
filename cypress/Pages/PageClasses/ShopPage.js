/// <reference types="cypress" />
 
import BasePage from "./BasePage"
 
class ShopPage extends BasePage {

   ItemBuyLink(ItemName){
      return cy.xpath("//h4[text()='"+ItemName+"']/../p/child::a[text()='Buy']")
   }

   get CartLink(){
      return cy.get('a[href="#/cart"]')
   }

   ItemPrice(ItemName){
      return cy.xpath("//td[text()=' "+ItemName+"']/following-sibling::td[1]")
   }

   ItemSubtotalPrice(ItemName){
      return cy.xpath("//td[text()=' "+ItemName+"']/following-sibling::td[3]")
   }
   
   get GrandTotalElement(){
      return cy.get('strong[class="total ng-binding"]')
   }

   get EmptyCartBtn(){
      return cy.get('a[ui-if="cart.getCount() > 0"]')
   }

   ItemInputField(ItemName){
      return cy.xpath("//td[text()=' "+ItemName+"']/../td/input")
   }
}
 
export default ShopPage