class ProfilePage {
    myAcc = () => cy.get(".my-account");
    organizationFiled = () => cy.get("#user_custom_field_values_5");
    saveBtn = () => cy.get("input[type=submit]");
    flashNotice = () => cy.get("#flash_notice");
};

export default new ProfilePage;