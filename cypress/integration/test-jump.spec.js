/// <reference types="cypress" />

describe('Validar Teste Web Jump', () => {
    beforeEach(() => {
        //Acessando o site
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/');
        //verificando  se a imagem do Selenium esta na tela
        cy.get('img[src="https://i.imgur.com/1vsaEJB.jpg"]').should('be.visible');
    });

    it('Cliclar no botão no One que está na tabela Buttons e verifciar que botão some', () => {
        //clicando no botão da tabela Buttons
        cy.get('#panel_test_one').should('contain','Buttons');
        cy.get('#panel_test_one').contains('One').click();
        cy.get('#panel_test_one').contains('One').should('not.be.visible')
    });

    it('Cliclar no botão no One que está na tabela iFrames e verifciar que botão some', () => {
        //Entrando no iFrame do Sistema e clicando no botão da tabela IFrame Buttons
        cy.enter('iframe[src="buttons.html"]').then(getBody => {
            getBody().find('#btn_one').click()
            getBody().find('#btn_one').should('not.be.visible');
          })
          
    });
});

