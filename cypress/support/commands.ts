/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/// <reference types="cypress" />

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/');
  cy.get('input[name=q]').type(query).parent('form').submit();
});

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>;
  }
}
