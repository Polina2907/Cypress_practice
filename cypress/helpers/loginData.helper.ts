const email = Cypress.env("email");
const password = Cypress.env("password");

export const loginData = {
    email, 
    password
};