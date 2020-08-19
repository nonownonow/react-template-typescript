/// <reference types="cypress" />

context('Cypress.Commands', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin');
  });

  it('.add() - create a custom command', () => {
    cy.get('#email').type('fake@email.com');
    cy.get('#password').type('fakepassword');
    cy.get('button[type="submit"]').click();
  });
});
