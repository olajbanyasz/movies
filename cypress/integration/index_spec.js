describe('Movies app', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });
  
  it ('should have a header, contains an input field with given placeholder, text, a button and 2 filters', () => {
    cy.get('.app-header').contains('FIND YOUR MOVIE');
    cy.get('.app-header .search-button').contains('SEARCH');
    cy.get('.app-header .search-filter').contains('SEARCH BY');
    cy.get('.app-header .sorter').contains('Sort by');
    cy.get('.app-header .movie-search-field').should('have.attr', 'placeholder', 'What are you looking for?');
	});
  
  it ('should have a footer with given colors and text', () => {
    cy.get('.app-footer').should('have.css', 'color', 'rgb(51, 51, 51)');
    cy.get('.app-footer').should('have.css', 'background-color', 'rgb(34, 31, 31)');
    cy.get('.app-footer div').contains('Netflixroulette');
	});

	it ('should have a sort-by feature with sort-by-date default selected', () => {
    cy.get('.sorter').contains('Sort by');
    cy.get('.sort-container .sorter-button-group .sort-by-date').should('have.css', 'color', 'rgba(229, 19, 1, 0.5)');
    cy.get('.sort-container .sorter-button-group .sort-by-date').should('have.class', 'active');
	});
  
  it ('should sort movies by-date default', () => {
    cy.get('.movie-list .movie-tile').first().contains('1972');
	});
  
  it ('should have a sort-by feature with sort-by-rating option witch not active by default', () => {
    cy.get('.sort-container .sorter-button-group .sort-by-rating').should('not.have.class', 'active');
	});
  
  it ('should activate the sort by Rating button when it clicked', () => {
    cy.get('.sort-container .sorter-button-group .sort-by-rating').should('have.css', 'color', 'rgb(51, 51, 51)');
    cy.get('.sort-container .sorter-button-group .sort-by-rating').click();
    cy.get('.sort-container .sorter-button-group .sort-by-rating').should('have.class', 'active');
    cy.get('.sort-container .sorter-button-group .sort-by-rating').should('have.class', 'active');
    cy.get('.sort-container .sorter-button-group .sort-by-rating').should('have.css', 'color', 'rgba(229, 19, 1, 0.5)');
	});
  
  it ('should reorder the movies when sort by Rating button clicked', () => {
    cy.get('.sort-container .sorter-button-group .sort-by-date').click();
    cy.get('.movie-list .movie-tile').first().contains('1972');
    cy.get('.sort-container .sorter-button-group .sort-by-rating').click();
    cy.get('.movie-list .movie-tile').first().contains('1974');
	});
  
  it ('should have a search-by feature with search-by-title default selected with given colors', () => {
    cy.get('.search-filter').contains('SEARCH BY');
    cy.get('.search-filter .search-by-title').should('have.css', 'color', 'rgb(245, 245, 241)');
    cy.get('.search-filter .search-by-title').should('have.css', 'background-color', 'rgba(229, 19, 1, 0.5)');
    cy.get('.search-filter .search-by-title').should('have.class', 'active');
	});
  
});