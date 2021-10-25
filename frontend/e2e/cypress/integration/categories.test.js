/// <reference types="cypress" />

import Chance from 'chance';

describe('Categories', () => {
  const chance = Chance();

  // Test account
  const email = 'info@info.it';
  const password = '123456';

  const category = {
    name: chance.string(),
  };

  beforeEach(() => {
    // Login the user before each test
    cy.visit('/');

    // Click the sign in button
    cy.get('[data-testid=signin-button]').click();

    // Type email, password
    cy.get('[data-testid=email').type(email);
    cy.get('[data-testid=password').type(password);

    // Click login button
    cy.get('[data-testid=login-button]').click();
  });

  it('should be able to create a new category and filter it by name', () => {
    // Toggle new category button
    cy.get('[data-testid=fab]').click();

    // Type category name in editing dialog
    cy.get('[data-testid=category-name').type(category.name);

    // Save category
    cy.get('[data-testid=save-category').click();

    // Category should have been saved
    cy.contains(category.name).should('be.visible');

    // Search for category
    cy.get('[data-testid=search-field]').type(category.name);

    // Category should still be visible
    cy.contains(category.name).should('be.visible');

    // Search for another category
    cy.get('[data-testid=search-field]').type(category.name + chance.string());

    // Category should not be visible
    cy.contains(category.name).should('not.exist');
  });

  it('should be able to edit the category and delete it', () => {
    // Click on created category
    cy.contains(category.name).click();

    // Check that the heading contains the category name
    cy.get('[data-testid=category-heading]').contains(category.name);

    // Click on edit button
    cy.get('[data-testid=category-edit]').click();

    // Change category name
    const newName = chance.string();

    cy.get('[data-testid=category-name').type(newName);

    // Save edited category
    cy.get('[data-testid=save-category').click();

    // Check that the heading contains the new category name
    cy.get('[data-testid=category-heading]').contains(newName);

    // Click the delete button
    cy.get('[data-testid=category-delete]').click();

    // Confirm the delete operation
    cy.get('[data-testid=confirm-button]').click();

    // Check that the current URL is /dashboard
    cy.url().should('include', '/dashboard');

    // Check that the category is not present
    cy.contains(category.name).should('not.exist');
  });
});
