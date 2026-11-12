import {global} from "./Global";

export class general extends global{
  //*******Functions / Reusable Components ******** */
  //User Defined Methods
    async openApplication() {
          await this.page.goto(this.url);
          console.log("Application is opened");

    }
    async login(){
      await this.page.locator(this.textbox_loginname).fill(this.username);
      await this.page.locator(this.textbox_password).fill(this.password);
      await this.page.locator(this.button_Login).click();
      console.log("Login Completed");
    }
    async logout(){
     await this.page.locator(this.link_logout).click();
     console.log("Logout completed");
    }
    async addNewEmployee(){
      const frame = this.page.frameLocator(this.frame_empInfo);
      await frame.locator(this.button_Add).click();
      await frame.locator(this.textbox_efn).fill(this.efn);
      await frame.locator(this.textbox_eln).fill(this.eln);
      await frame.locator(this.button_save).click();
      console.log("New Employee Added");
    }
}