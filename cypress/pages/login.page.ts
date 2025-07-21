class LoginPage {
  emailInput = () => cy.get('input[name="username"]');
  passwordInput = () => cy.get('input[name="password"]');
  loginButton = () => cy.get('input[name="login"]');

  login = () => {
    const email = `${Cypress.env('email')}`;
    const password = `${Cypress.env('password')}`;

    cy.visit("/login");
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.loginButton().click();
  };
}

export default new LoginPage();
