/// <reference types="cypress" />

import Chance from 'chance';

describe('Categories', () => {
  const chance = Chance();

  // Test account
  const email = chance.email();
  const password = chance.string();

  const category = {
    name: chance.string(),
  };

  const resource = {
    name: chance.string(),
    author: chance.string(),
    duration: chance.natural({ max: 1000 }),
    link: chance.url(),
  };

  before(() => {
    // Create new test account
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
  });

  beforeEach(() => {
    // Login the user before each test
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
  });

  it('should be able to create a new category and filter it by name', () => {
    // Click new category button
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

  it('should be able to add a resource to the category and edit it', () => {
    // Click on created category
    cy.contains(category.name).click();

    // Click new resource button
    cy.get('[data-testid=fab]').click();

    // Fill form fields
    cy.get('[data-testid=resource-name]').type(resource.name);
    cy.get('[data-testid=resource-author]').type(resource.author);
    cy.get('[data-testid=resource-duration]').clear().type(resource.duration);
    cy.get('[data-testid=resource-link]').type(resource.link);

    // Save resource
    cy.get('[data-testid=save-resource]').click();

    // Check that resource has been saved
    cy.contains(resource.name).should('be.visible');

    // Search for resource
    cy.get('[data-testid=search-field]').type(resource.name);

    // Resource should still be visible
    cy.contains(resource.name).should('be.visible');

    // Search for another resource
    cy.get('[data-testid=search-field]').type(resource.name + chance.string());

    // Resource should not be visible
    cy.contains(resource.name).should('not.exist');

    // Clear search
    cy.get('[data-testid=search-field]').clear();

    // Click on created resource
    cy.contains(resource.name).click();

    // Change resource name
    const newName = chance.string();

    cy.get('[data-testid=resource-name]').type(newName);

    // Save resource
    cy.get('[data-testid=save-resource]').click();

    // Check that resource has been saved
    cy.contains(resource.name).should('be.visible');
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
    cy.get('[data-testid=confirm-button]').last().click();

    // Check that the current URL is /dashboard
    cy.url().should('include', '/dashboard');

    // Check that the category is not present
    cy.contains(category.name).should('not.exist');
  });
});
