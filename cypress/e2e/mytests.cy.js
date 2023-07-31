describe('My test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('test@test.com', 'test')
  })
  it('Add one new book ', () => {
    cy.addBook('title1', 'description1', null, null, 'authors1', null)
    cy.contains('title1').should('be.visible')
    cy.contains('authors1').should('be.visible')
    
  })
  it('Add one new book and add favorite', () => {
    cy.addBook('title1', 'description1', null, null, 'authors1', 'yes')
    cy.contains('Favorites').click()
    cy.contains('title1').should('be.visible')
    cy.contains('authors1').should('be.visible')
    
  })
  it('Open added book', () => {
    cy.contains("title1").click()
    cy.contains('title1').should('be.visible')
    cy.contains('authors1').should('be.visible')
    cy.contains('description1').should('be.visible')
  })
})