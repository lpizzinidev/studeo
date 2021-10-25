/// <reference types="cypress" />

import Chance from 'chance';

describe('Authentication', () => {
  const chance = Chance();

  const email = chance.email();
  const password = chance.string({ length: 8 });

  it('should complete registration process correctly', () => {
    cy.visit('/');

    // Click the sign up button
    cy.get('[data-testid=signup-button]').click();

    // Check that the current page URL is /signup
    cy.url().should('include', '/signup');

    // Type email, password and confirm password
    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password);
    cy.get('[data-testid=confirm-password').type(password);

    // Click registration button
    cy.get('[data-testid=login-button]').click();

    // Check that the current page URL is /dashboard
    cy.url().should('include', '/dashboard');
  });

  it('should login and logout correctly with existing account', () => {
    cy.visit('/');

    // Click the sign in button
    cy.get('[data-testid=signin-button]').click();

    // Check that the current page URL is /signin
    cy.url().should('include', '/signin');

    // Type email, password
    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password);

    // Click login button
    cy.get('[data-testid=login-button]').click();

    // Check that the current page URL is /dashboard
    cy.url().should('include', '/dashboard');

    // Click logout button
    cy.get('[data-testid=logout-button]').click();

    // Click confirm logout button
    cy.get('[data-testid=confirm-button]').click();

    // Check that the current page URL is /
    cy.url().should('not.include', '/dashboard');
  });

  it('should show alert on existing user registration', () => {
    cy.visit('/');

    // Click the sign up button
    cy.get('[data-testid=signup-button]').click();

    // Type email, password and confirm password
    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password);
    cy.get('[data-testid=confirm-password').type(password);

    // Click registration button
    cy.get('[data-testid=login-button]').click();

    cy.contains('User already exists').should('be.visible');
  });

  it('should show alert on wrong credentials authentication', () => {
    cy.visit('/');

    // Click the sign up button
    cy.get('[data-testid=signin-button]').click();

    // Type email, password and confirm password
    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password + chance.string());

    // Click registration button
    cy.get('[data-testid=login-button]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });
});
