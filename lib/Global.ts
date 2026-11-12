// To provide Test Data Objects/Elements to use in whole Application//
import {Page} from '@playwright/test';
export class global {
    constructor (public page: Page){

    }
    //******Test Data */
    public url       : string = "https://sureshitacademy.in/hrms/login.php";
    public username  : string = "sureshit";
    public password  : string = "sureshit";
    public efn       : string = "Tanu";
    public eln       : string = "Thota";

    //*** Object/Elements */
    public textbox_loginname : string = "//input[@name = 'txtUserName']";
    public textbox_password  : string = "//input[@name = 'txtPassword']";
    public button_Login      : string = "//input[@name= 'Submit']";
    public  link_logout      : string = "//a[text() = 'Logout']";
    public frame_emoInfo     : string = " //iframe[@id = 'rightMenu']";
    public button_Add        : string = " //input[@value = 'Add']";
    public textbox_efn       : string = "//input[@name ='txtEmpFirstName']";
    public textbox_eln       : string = "//input[@name ='txtEmpLastName']";
    public button_save       : string = "//input[@id='btnEdit']";

}