class Search {

    searchBtn = () => cy.get('#quick-search').find('label[for="q"]');
    searchField = () => cy.get('.box').find('#search-input');
    submitBtn = () => cy.get('input[type="submit"]');
    searchResult = () => cy.get('.icon-message').eq(0).children().eq(1);
}

export default new Search;