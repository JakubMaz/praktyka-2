import createTestCafe from "testcafe";
import {Selector, t} from 'testcafe';
import { Role } from 'testcafe';
import * as roles from '../components/Roles';


    const burgerButton = Selector('.bm-burger-button');
    const logoutButton = Selector('#logout_sidebar_link');
    


    fixture `loginTest`
    .page`https://www.saucedemo.com/`
    


    test('Logowanie poprawnymi danymi - standard user', async t => {
    await t
        .useRole(roles.standardUser);
    await t
        .click(burgerButton)
        .expect(logoutButton.exists).ok();

});

test.skip('Logowanie problemUser', async t => {
    await t
        .debug()
        .useRole(roles.problemUser);
    await t
        .click(burgerButton)
        .expect(logoutButton.exists).ok();

});
