describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit("../index.html")
    cy.compareSnapshot('index', 0.0);
  })
})