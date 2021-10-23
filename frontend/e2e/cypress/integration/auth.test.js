/// <reference types="cypress" />

import Chance from 'chance';

describe('Authentication', () => {
  const chance = Chance();

  it('should register new user and login', () => {
    cy.visit('/');

    // Click the sign up button
    cy.get('[data-testid=signup-button]').click();

    // Check that the current page URL is /signup
    cy.url().should('include', '/signup');

    // Type email, password and confirm password
    const email = chance.email();
    const password = chance.string({ length: 8 });

    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password);
    cy.get('[data-testid=confirm-password').type(password);

    // Click registration button
    cy.get('[data-testid=login-button]').click();

    // Check that the current page URL is /dashboard
    cy.url().should('include', '/dashboard');
  });
});
