describe("Port1", () => {
  it('Test Carro', () => {
    cy.visit("https://carro.co/th")
    cy.contains('แสดงรถ').click()
    cy.contains('ประเภทรถ').click()
    cy.wait(500)
    cy.get('[label="Sedan"]').click()
    cy.contains('ยืนยัน').click()
    cy.get('[class="ant-typography Typography__StyledText-sc-j5up8g-0 kvquMs FilterTag__StyledTypography-sc-ra6976-1 lchSnn body"').should('contain', 'Sedan')

    cy.get('[class="ant-row"]').find('[class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"]').then(car => {
      cy.wrap(car).eq(0).click()
    })

    cy.get('[title="0%"]').click()
    cy.get('[title="30%"]').click()
    cy.get('[title="3.75 %"]').click()
    cy.get('[title="6.0 %"]').click()
    cy.get('[title="84 เดือน"]').click()
    cy.get('[title="12 เดือน"]').click()
    cy.get('[class="price"]').should('contain', '25,737')
  })
})