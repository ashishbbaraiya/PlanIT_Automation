import HomePage from '../../Pages/PageClasses/HomePage'
import ContactPage from '../../Pages/PageClasses/ContactPage.js'
import BasePage from '../../Pages/PageClasses/BasePage.js'

//// Valdiate mandatory fields of the page shows errors.
export const ContactPage_ErrorsValidation = (FORENAME_VALIDATION_MESSAGE_DATA1,EMAIL_VALIDATION_MESSAGE_DATA1,MESSAGE_VALIDATION_MESSAGE_DATA1,PAGE_VALIDATION_ALERT_ERROR_DATA1) => {
        const contact = new ContactPage();
        cy.get(contact.ForenameInputRequired.should('have.text',FORENAME_VALIDATION_MESSAGE_DATA1));
        cy.get(contact.EmailInputRequired.should('have.text',EMAIL_VALIDATION_MESSAGE_DATA1));
        cy.get(contact.MessageInputRequired.should('have.text',MESSAGE_VALIDATION_MESSAGE_DATA1));
        cy.get(contact.PageValidationAlertError.should('contain', PAGE_VALIDATION_ALERT_ERROR_DATA1));
}

//// Populate mandatory fields
export const ContactPage_PopulateFields = (FORENAME_INPUT_DATA,EMAIL_INPUT_DATA,MESSAGE_INPUT_DATA) => {
    const contact = new ContactPage();
    contact.ForenameInput.click({ waitForAnimations: false })
    contact.ForenameInput.type(FORENAME_INPUT_DATA);
    contact.EmailInput.type(EMAIL_INPUT_DATA);
    contact.MessageInput.type(MESSAGE_INPUT_DATA);
}

//// Valdiate mandatory fields related errors are gone.
export const ContactPage_ErrorsDisappear = (FORENAME_VALIDATION_MESSAGE_DATA,EMAIL_VALIDATION_MESSAGE_DATA,MESSAGE_VALIDATION_MESSAGE_DATA,PAGE_VALIDATION_ALERT_ERROR_DATA) => {
    const contact = new ContactPage();
     cy.get(contact.ForenameInputRequired.should('not.exist',FORENAME_VALIDATION_MESSAGE_DATA));
     cy.get(contact.EmailInputRequired.should('not.exist',EMAIL_VALIDATION_MESSAGE_DATA));
     cy.get(contact.MessageInputRequired.should('not.exist',MESSAGE_VALIDATION_MESSAGE_DATA));
     cy.get(contact.PageValidationAlertError.should('not.exist', PAGE_VALIDATION_ALERT_ERROR_DATA));
}