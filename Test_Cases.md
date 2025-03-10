Test Cases Documentation

---

### Test Case 1: Successful Login with Valid Credentials
- **Description**: Verifies that the user can log in successfully with valid credentials.
- **Preconditions**: 
  - User has valid credentials: username `standard_user`, password `secret_sauce`.
  - User is on the SauceDemo login page (`https://www.saucedemo.com`).
- **Test Steps**:
  1. Go to `https://www.saucedemo.com`.
  2. Enter `standard_user` in the username field.
  3. Enter `secret_sauce` in the password field.
  4. Click on the "Login" button.
- **Expected Results**: 
  - User is redirected to the product page (`/inventory.html`).
  - The product page should display product items.
  
---

### Test Case 2: Error Message for Invalid Credentials
- **Description**: Verifies that an error message is shown when invalid credentials are entered.
- **Preconditions**: 
  - User has invalid credentials: username `invalid_user`, password `wrong_password`.
  - User is on the SauceDemo login page (`https://www.saucedemo.com`).
- **Test Steps**:
  1. Go to `https://www.saucedemo.com`.
  2. Enter `invalid_user` in the username field.
  3. Enter `wrong_password` in the password field.
  4. Click on the "Login" button.
- **Expected Results**:
  - An error message "Username and password do not match" should be displayed.
  
---

### Test Case 3: Password Input Masking
- **Description**: Verifies that the password field correctly masks input characters.
- **Preconditions**:
  - User is on the SauceDemo login page (`https://www.saucedemo.com`).
- **Test Steps**:
  1. Go to `https://www.saucedemo.com`.
  2. Enter any password in the password field.
- **Expected Results**: 
  - The characters in the password field are masked with `•`.
  
---

### Test Case 4: Complete Purchase Flow
- **Description**: Verifies the end-to-end flow for adding an item to the cart and completing the purchase.
- **Preconditions**: 
  - User is logged in with valid credentials.
  - User is on the product page (`/inventory.html`).
  - At least one item is available for purchase.
- **Test Steps**:
  1. Log in with valid credentials.
  2. Add an item to the cart.
  3. Click on the cart icon.
  4. Proceed to checkout.
  5. Fill in the checkout information (First Name, Last Name, Postal Code).
  6. Click on "Continue" and then "Finish".
- **Expected Results**:
  - The user sees an order confirmation message, such as "Thank you for your order".
