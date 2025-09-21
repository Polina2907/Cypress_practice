import loginPage from "../../pages/login.page";
import tabsPage from "../../pages/tabs.page";

describe("Login test", () => {
  
  beforeEach(() => {
    loginPage.login(); 
  });

  it("Log in successfully", () => {
   
    tabsPage.checkUrl('/my/page');
    tabsPage.verifyMyPageText();
    tabsPage.logout();
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
    tabsPage.checkUrl('/projects/redmine');

    // Download
    tabsPage.donwloadBtn().click();
    tabsPage.checkUrl('/wiki/Download');

    // Activity
    tabsPage.activityBtn().click();
    tabsPage.checkUrl('/activity');

    // Roadmap
    tabsPage.roadmapBtn().click();
    tabsPage.checkUrl('/roadmap');

    // Issues
    tabsPage.issuesBtn().click();
    tabsPage.checkUrl('/issues');

    // News
    tabsPage.newsBtn().click();
    tabsPage.checkUrl('/news');

    // Wiki
    tabsPage.wikiBtn().click();
    tabsPage.checkUrl('/wiki');

    // Boards
    tabsPage.boardsBtn().click();
    tabsPage.checkUrl('/boards');

    // Repository
    tabsPage.repositoryBtn().click();
    tabsPage.checkUrl('/repository');
    });
});