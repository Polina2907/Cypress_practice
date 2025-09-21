export class Common {
   checkUrl(url: string) {
    cy.url().should('include', url);
  };

  verifyContainsText(text: string) {
    cy.contains(text).should("be.visible");
  };

  clickLogout() {
    cy.get(".logout").click();
  }
}
