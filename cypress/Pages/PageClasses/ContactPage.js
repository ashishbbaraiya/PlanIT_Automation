/// <reference types="cypress" />
 
import BasePage from "./BasePage"
 
class ContactPage extends BasePage {

   // Page objects are defined here.
   get ForenameInput(){
       return cy.get('#forename')
   }
   get ForenameInput(){
       return cy.get('#forename')
   }
 
   get SurenameInput(){
    return cy.get('#surname')
    }
    
    get EmailInput(){
        return cy.get('#email')
    }

    get TelephoneInput(){
        return cy.get('#telephone')
    }

    get MessageInput(){
        return cy.get('#message')
    }

    //// Page's mandatory fields validation objects are defined.
    get ForenameInputRequired(){
        return cy.get('#forename-err')
    }

    get EmailInputRequired(){
         return cy.get('#email-err')
     }
 
    get MessageInputRequired(){
         return cy.get('#message-err')
     }
    
    get PageValidationAlertError(){
        return cy.get("div[class^='alert alert-error']")
    }

    get SubmitBtn(){
        return cy.get('a:contains("Submit")')
    }

    get SubmitContactSuccess(){
        return cy.get("div[class*='alert alert-success']")
    }
}
 
export default ContactPage 