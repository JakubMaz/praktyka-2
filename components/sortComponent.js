import {Selector, t} from 'testcafe';

export default async function doPriceList(t) {

    const inputLogin = Selector('#user-name');
    const inputPassword = Selector('#password');
    const loginButton = Selector('#login-button');
    const price = Selector('.inventory_item_price');

     await t
         .typeText(inputLogin, 'standard_user', {paste:true})
         .typeText(inputPassword, 'secret_sauce', {paste:true})
         .click(loginButton);

        let priceList = [];
            for (let i=0; i < price.count; i++){
            
                const priceTwo = price.nth(i)
                let priceText = priceTwo.textContent;
                let  clearPriceText = priceText.replace('$','');
                const priceNumber = parseFloat(clearPriceText);
                priceList.push(priceNumber)
            };

        return priceList;
}