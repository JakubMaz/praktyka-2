import createTestCafe from "testcafe";
import {Selector, t} from 'testcafe';
import { Role } from 'testcafe';
import getLoginPageSelectors from "../components/loginPage";
import * as roles from '../components/Roles';


    const {
        burgerButton,
        logoutButton,
    } = getLoginPageSelectors();
    


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
