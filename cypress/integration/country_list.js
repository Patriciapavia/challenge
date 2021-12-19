describe('seach for country name by alphabet', () => {
	it('user can type to search for a country by alphabet', () => {
		cy.visit('/');
		cy.findByRole('textbox').type('au');
		cy.get('.options > :nth-child(1)').click();
		cy.get('input').should('have.value', 'Australia');
	});
});

describe('click on seach bar will display list of countries and if user click some where else will close the toggle', () => {
	it('user can click on search bar to enable list countries and click out side to disable  ', () => {
		cy.visit('/');
		cy.findByRole('textbox').click();
		cy.get('body').click();
		cy.get('.options').should('not.be.visible');
	});
});
