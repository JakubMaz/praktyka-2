import { Role } from 'testcafe';
import {Selector, t} from 'testcafe';


const inputLogin = Selector('#user-name');
const inputPassword = Selector('#password');
const loginButton = Selector('#login-button');


export const standardUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(inputLogin, 'standard_user', {paste:true})
        .typeText(inputPassword, 'secret_sauce', {paste:true})
        .click(loginButton);
        },
        { preserveUrl: true }
);

export const problemUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(inputLogin, 'problem_user', {paste:true})
        .typeText(inputPassword, 'secret_sauce', {paste:true})
        .click(loginButton);
        },
        { preserveUrl: true }
);

export const performanceGlitchUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(inputLogin, 'performance_glitch_user', {paste:true})
        .typeText(inputPassword, 'secret_sauce', {paste:true})
        .click(loginButton);
        },
        { preserveUrl: true }
);

export const lockedUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(inputLogin, 'locked_out_user', {paste:true})
        .typeText(inputPassword, 'secret_sauce', {paste:true})
        .click(loginButton);
        },
        { preserveUrl: true }
);

