import { Common } from "../helpers/common.helper";

class Tabs extends Common{
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

    verifyMyPageText() {
        this.verifyContainsText("Моя сторінка");
    };

    logout() {
        this.clickLogout();
    };
}

export default new Tabs();