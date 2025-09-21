import loginPage from "../../pages/login.page";
import repositoryPage from "../../pages/repository.page";
import tabsPage from "../../pages/tabs.page";

describe("Look for a file in repository", () => {

    beforeEach(() => {
        loginPage.login(); 
      });

    it("Look for a file in repository", () => {
        tabsPage.homeBtn().click();
        tabsPage.repositoryBtn().click();
        repositoryPage.versionSearch().type('5{enter}');
        repositoryPage.expanderIcon().eq(1).click();
        repositoryPage.expanderIcon().eq(2).click();
        repositoryPage.iconFolder().contains('doc').click();
        repositoryPage.iconFile().contains('README').click();
        repositoryPage.breadCrumbs().contains('README');
    });
});