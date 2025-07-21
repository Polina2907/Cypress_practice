class Tabs {
    homeBtn = () => cy.get('.home');
    overviewBtn = () => cy.get('.overview');
    donwloadBtn = () => cy.get('.download');
    activityBtn = () => cy.get('.activity');
    roadmapBtn = () => cy.get('.roadmap');
    issuesBtn = () => cy.get('.issues');
    newsBtn = () => cy.get('.news');
    wikiBtn = () => cy.get('.wiki').contains('Wiki');
    boardsBtn = () => cy.get('.boards');
    repositoryBtn = () => cy.get('.repository');
}

export default new Tabs();