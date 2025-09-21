import loginPage from "../../pages/login.page";
import profilePage from "../../pages/profile.page";
import { getFakerData } from "../../helpers/dataGeneration.helper";
import { successfulMsg } from "../../helpers/staticData.helper";

describe("Edit info on Profile page", () => {

    const organization = getFakerData.organizationName();
    
    beforeEach(() => {
            loginPage.login(); 
          });

    it("Edit person info on Profile page", () => {
        profilePage.myAcc().click();
        profilePage.organizationFiled().type(organization);
        profilePage.saveBtn().eq(0).click();
        profilePage.flashNotice().contains(successfulMsg);
    });
});