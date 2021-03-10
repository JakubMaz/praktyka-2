import {Selector, t} from 'testcafe';

function getLoginPageSelectors() {
    return {
        burgerButton: Selector('.bm-burger-button'),
        logoutButton: Selector('#logout_sidebar_link'),
    }
};

export default getLoginPageSelectors