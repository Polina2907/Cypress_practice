import { loginData } from "../helpers/loginData.helper";

class LoginPage {
  emailInput = () => cy.get('input[name="username"]');
  passwordInput = () => cy.get('input[name="password"]');
  loginButton = () => cy.get('input[name="login"]');

  login = () => {
    cy.visit("/login");
    this.emailInput().type(loginData.email);
    this.passwordInput().type(loginData.password);
    this.loginButton().click();
  };
}

export default new LoginPage();
