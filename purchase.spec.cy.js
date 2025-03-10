describe('UI Tests - Purchasing Flow', () => {
  it('should successfully complete a purchase', () => {
    cy.visit('/');  // Visit the login page

    // Log in with valid credentials
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Add item to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Go to the cart
    cy.get('.shopping_cart_link').click();

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click();

    // Fill in checkout information
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    
    cy.get('[data-test="continue"]').click();

    // Finish purchase
    cy.get('[data-test="finish"]').click();

    // Check for order confirmation
    cy.contains('Thank you for your order').should('be.visible');
  });
});
