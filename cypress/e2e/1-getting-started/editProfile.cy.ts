import loginPage from "../../pages/login.page";
import profilePage from "../../pages/profile.page";
import { faker } from '@faker-js/faker';

describe("Edit info on Profile page", () => {

    const organization = faker.company.name();
    
    beforeEach(() => {
            loginPage.login(); 
          });

    it("Edit persoinfo on Profile page", () => {
        profilePage.myAcc().click();
        profilePage.organizationFiled().type(organization);
        profilePage.saveBtn().eq(0).click();
        profilePage.flashNotice().contains("Обліковий запис успішно оновлений.");
    });
});