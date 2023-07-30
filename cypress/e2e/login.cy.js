describe("login page", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("should checking the page display", () => {
    cy.contains('Books list').should('be.visible')
    cy.contains("Log in").should('be.visible')
  })

  it("should login with valid email and password", () => {
    
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  it('should not login with empty mail', () => {
    
    cy.login(null, 'test')
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  it('should not login with empty password', () => {
    
    cy.login('test@test.com', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})
