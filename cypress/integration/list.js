/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const item_titles = [ 'Wac, ft. Valeria - “Tortoise”','Kishi Bashi - “The Ballad of Mr Steak”','Lucy Dacus - “Night Shift”','Shamir - “Larry Clark”','Moloko - “Over & Over”','Shugo Tokumaru - “Lita-Ruta”',]
const valid_item = 'Valid Item Text';
const short_item = 'Short';
const long_item = 'Very very long Item Text';

describe('item list app', function () {
  beforeEach(() => {
    cy.visit('/');
  });

  it('default elements', function () {
    cy.findByText('Items').should('exist')
    // cy.findByText('Wac, ft. Valeria - “Tortoise”').should('exist')
    // cy.findByText('Kishi Bashi - “The Ballad of Mr Steak”').should('exist')
    // cy.findByText('Lucy Dacus - “Night Shift”').should('exist')
    // cy.findByText('Shamir - “Larry Clark”').should('exist')
    // cy.findByText('Moloko - “Over & Over”').should('exist')
    // cy.findByText('Shugo Tokumaru - “Lita-Ruta”').should('exist')
    cy.get('.Item').each((item,index) => {
      cy.wrap(item).should('contain.text',item_titles[index])
    })
    cy.findByText('Title:').should('exist')
    cy.findByText('(between 10 and 20 characters)').should('exist')
    cy.get('input#title').should('exist')
    cy.findByText('Add Item').should('exist')
  })

  it('allows to add item in list', function() {
    cy.get('input#title').clear().type(valid_item);
    cy.findByText('Add Item').click();
    cy.findByText(valid_item).should('exist');
  })

  it('allows to remove item in list', function() {
    cy.findByText('Moloko - “Over & Over”').parent('div').find('button').click()
    cy.get('div').contains('Moloko - “Over & Over”').should('not.exist')
  })

  it('validates for item less than 10 characters', function () {
    cy.get('input#title').clear().type(short_item);
    cy.findByText('Add Item').click();
    cy.findByText('Title must be at least 10 characters.').should('exist');
  });

  it('validates for item more than 20 characters', function () {
    cy.get('input#title').clear().type(long_item);
    cy.findByText('Add Item').click();
    cy.findByText('Title can be at most 20 characters.').should('exist');
  });
});
