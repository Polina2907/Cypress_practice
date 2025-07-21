import searchPage from "../../pages/search.page";
import loginPage from "../../pages/login.page";

describe("Search test", () => {
  
  beforeEach(() => {
    loginPage.login(); 
  });

  it("Search by a keyword", () => {
    
    searchPage.searchBtn().click();
    searchPage.searchField().type("scm");
    searchPage.submitBtn().click();
    searchPage.searchResult().click();

    cy.get('.logout').click();
  });
});