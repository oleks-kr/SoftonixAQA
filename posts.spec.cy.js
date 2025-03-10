describe('API Tests - CRUD Operations for Posts', () => {
  const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  let postId;

  // Use the configured apiUrl baseUrl
  it('should create a new post (POST)', () => {
    cy.request('POST', `${Cypress.config('apiUrl')}/posts`, postData).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      postId = response.body.id;
    });
  });

  it('should fetch all posts (GET)', () => {
    cy.request('GET', `${Cypress.config('apiUrl')}/posts`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('should update a post (PUT)', () => {
    const postData = {
      title: 'updated title',
      body: 'updated content',
      userId: 1
    };
  
    it('should update a post (PUT)', () => {
      cy.request({
        method: 'PUT',
        url: `${Cypress.config('apiUrl')}/posts/101`,  // Ensure the post ID exists
        body: postData
      }).then(response => {
        // Expect 200 OK for an existing post
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'updated title');
        expect(response.body).to.have.property('body', 'updated content');
      });
    });
  });

  it('should delete a post (DELETE)', () => {
    cy.request('DELETE', `${Cypress.config('apiUrl')}/posts/${postId}`).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
