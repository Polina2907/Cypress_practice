class Repository {
    versionSearch = () => cy.get('#revision_selector').find('input[id="rev"]');
    expanderIcon = () => cy.get('.expander');
    iconFolder = () => cy.get('.icon-folder');
    iconFile = () => cy.get('.icon-file');
}

export default new Repository;