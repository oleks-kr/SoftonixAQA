### Bug Report Documentation

---

### Bug Report 1: Login Error for Invalid Credentials
- **Bug Title**: Login Error for Invalid Credentials
- **Bug Description**: When attempting to log in with invalid credentials, no error message is displayed, and the page remains static.
- **Steps to Reproduce**:
  1. Go to `https://www.saucedemo.com`.
  2. Enter `invalid_user` in the username field.
  3. Enter `wrong_password` in the password field.
  4. Click the "Login" button.
- **Observed Result**: 
  - No error message is displayed, and the page does not indicate that the login attempt failed.
- **Expected Result**:
  - An error message like "Username and password do not match" should be shown.
  
- **Environment**:
  - **Browser**: Chrome 89.0.4389.82
  - **OS**: Windows 10
  - **Cypress Version**: 8.7.0

---

### Bug Report 2: 500 Internal Server Error (PUT Request)
- **Bug Title**: 500 Internal Server Error on Updating Post (PUT)
- **Bug Description**: When attempting to update a post with a `PUT` request, the server returns a `500 Internal Server Error` instead of a `200 OK`.
- **Steps to Reproduce**:
  1. Send a `PUT` request to `https://jsonplaceholder.typicode.com/posts/101`.
  2. Include the updated data (`title: "updated title", body: "updated content"`).
  3. Observe the response.
- **Observed Result**: 
  - The response status is `500 Internal Server Error` instead of `200 OK`.
- **Expected Result**:
  - The response status should be `200 OK`, and the post data should be updated.
  
- **Environment**:
  - **API Server**: `https://jsonplaceholder.typicode.com`
  - **Method**: `PUT`
  - **Payload**: `{ title: 'updated title', body: 'updated content', userId: 1 }`
  - **Cypress Version**: 8.7.0
