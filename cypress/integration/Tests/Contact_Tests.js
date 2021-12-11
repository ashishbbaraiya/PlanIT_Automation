import HomePage from '../../Pages/PageClasses/HomePage'
import ContactPage from '../../Pages/PageClasses/ContactPage.js'
import BasePage from '../../Pages/PageClasses/BasePage.js'
import {ContactPage_ErrorsValidation,ContactPage_PopulateFields,ContactPage_ErrorsDisappear} from '../Implementation/Contact_Actions.js'

describe('TC01_Validate Contact Page Mandatory fields (Regression, E2E)', ()=> {
    
    //// Refer Page Classes
    const base = new BasePage();
    const home = new HomePage();
    const contact = new ContactPage();

    //// Load Test Data
    beforeEach(function() {
        cy.fixture('ContactData').then(function(contact_data) {
            this.contact_data=contact_data
        })

        cy.fixture('SystemData').then(function(system_data) {
            this.system_data=system_data
        })
    })

    it('Launch application & Navigate to Contact Page', function() {
        base.launchApplication();
        home.ContactLink.click();
    })

    it('Validate mandatory fields of the page gives error while submitting with no data', function() {
        contact.SubmitBtn.click();
        ContactPage_ErrorsValidation(this.contact_data.FORENAME_VALIDATION_MESSAGE_DATA,this.contact_data.EMAIL_VALIDATION_MESSAGE_DATA,this.contact_data.MESSAGE_VALIDATION_MESSAGE_DATA,this.contact_data.PAGE_VALIDATION_ALERT_ERROR_DATA);
    })

    it('Populate mandatory fields', function() {        
        ContactPage_PopulateFields(this.contact_data.FORENAME_INPUT_DATA,this.contact_data.EMAIL_INPUT_DATA,this.contact_data.MESSAGE_INPUT_DATA);
        // // contact.SubmitBtn.click();

    })

    it('Validate errors are gone', function() {
        ContactPage_ErrorsDisappear(this.contact_data.FORENAME_VALIDATION_MESSAGE_DATA,this.contact_data.EMAIL_VALIDATION_MESSAGE_DATA,this.contact_data.MESSAGE_VALIDATION_MESSAGE_DATA,this.contact_data.PAGE_VALIDATION_ALERT_ERROR_DATA);

        //// Relative timeout until form submission process accomplishes.
        // cy.get("div[class*='alert alert-success']", { timeout: this.system_data.LONG_TIMEOUT }).should('be.visible');

        // contact.SubmitContactSuccess.should('contain',"Thanks "+ this.contact_data.FORENAME_INPUT_DATA +", we appreciate your feedback.");
    })
})

describe('TC02_Validate successful submission message for Contact Page (Smoke, E2E)', ()=> {
    
    //// Refer Page Classes
    const base = new BasePage();
    const home = new HomePage();
    const contact = new ContactPage();

    //// Load Test Data
    beforeEach(function() {
        cy.fixture('ContactData').then(function(contact_data) {
            this.contact_data=contact_data
        })

        cy.fixture('SystemData').then(function(system_data) {
            this.system_data=system_data
        })        
    })

    for (let i = 1; i < 6; i++) {
        describe('Contact page submission Iteration - ' + i , function() {
            it('Launch application & Navigate to Contact Page', function() {                
                base.launchApplication();
                home.ContactLink.click();
            })

            it('Populate mandatory fields & Click Submit', function() {        
                ContactPage_PopulateFields(this.contact_data.FORENAME_INPUT_DATA,this.contact_data.EMAIL_INPUT_DATA,this.contact_data.MESSAGE_INPUT_DATA);
                contact.SubmitBtn.click();
            })

            it('Validate successful submission message', function() {

                // Relative timeout until form submission process accomplishes.
                cy.get("div[class*='alert alert-success']", { timeout: this.system_data.LONG_TIMEOUT }).should('be.visible');

                contact.SubmitContactSuccess.should('contain',"Thanks "+ this.contact_data.FORENAME_INPUT_DATA +", we appreciate your feedback.");
            })
        })
    }
})
