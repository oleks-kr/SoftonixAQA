describe('UI Tests - Login', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/');  // Visit the login page

    // Input valid credentials
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    
    cy.get('[data-test="login-button"]').click();

    // Validate successful login (check if redirected to product page)
    cy.url().should('include', '/inventory.html');
  });
});

describe('UI Tests - Invalid Login', () => {
  it('should show error message for invalid credentials', () => {
    cy.visit('/');

    // Input invalid credentials
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    
    cy.get('[data-test="login-button"]').click();

    // Validate error message
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});

describe('UI Tests - Password Masking', () => {
  it('should mask password input', () => {
    cy.visit('/');  // Visit the login page

    // Type the password
    cy.get('[data-test="password"]').type('secret_sauce');

    // Check if the password is masked
    cy.get('[data-test="password"]').should('have.attr', 'type', 'password');
  });
});
