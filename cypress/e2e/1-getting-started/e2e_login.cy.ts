import loginPage from "../../pages/login.page";
import tabsPage from "../../pages/tabs.page";

describe("Login test", () => {
  
  beforeEach(() => {
    loginPage.login(); 
  });

  it("Log in successfully", () => {
   
    cy.url().should('include', '/my/page');
    cy.contains('Моя сторінка');

    cy.get('.logout').click();
  });
});

describe("Tabs check", () => {

  beforeEach(() => {
    loginPage.login(); 
  });

    it("Tabs are opened successfully", () => {

    tabsPage.homeBtn().click();
    // Перегляд
    tabsPage.overviewBtn().click();
    cy.url().should('include', '/projects/redmine');

    // Download
    tabsPage.donwloadBtn().click();
    cy.url().should('include', '/wiki/Download');

    // Activity
    tabsPage.activityBtn().click();
    cy.url().should('include', '/activity');

    // Roadmap
    tabsPage.roadmapBtn().click();
    cy.url().should('include', '/roadmap');

    // Issues
    tabsPage.issuesBtn().click();
    cy.url().should('include', '/issues');

    // News
    tabsPage.newsBtn().click();
    cy.url().should('include', '/news');

    // Wiki
    tabsPage.wikiBtn().click();
    cy.url().should('include', '/wiki');

    // Boards
    tabsPage.boardsBtn().click();
    cy.url().should('include', '/boards');

    // Repository
    tabsPage.repositoryBtn().click();
    cy.url().should('include', '/repository');
    });
});