// login and logout from the application//
import {test} from '@playwright/test';
import {general} from '../lib/General' ;
test('TC001' , async({page})=>{
    const obj = new general(page);
    await obj.openApplication();
    await page.waitForTimeout(3000);
    await obj.login();
    await page.waitForTimeout(3000);
    await obj.logout();
}
);
