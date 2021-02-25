import {Selector, t} from 'testcafe';
import { Role } from 'testcafe';
import * as roles from '../components/Roles';

const addtoCard = Selector('.inventory_item')
    .withText("Sauce Labs Backpack")
    .find('.btn_primary.btn_inventory');
const shoppingCard = Selector('.fa-layers-counter.shopping_cart_badge');
const addToCartButton = Selector('.btn_primary.btn_inventory');
const addToCartLastButton = Selector('.inventory_item').sibling(-1).find('.btn_primary.btn_inventory');
const removeButton = Selector('.btn_secondary.btn_inventory')

fixture `PayTest`
.page`https://www.saucedemo.com/`

test('Chcek if element was add to shoppingCard', async t => {
    await t
        .useRole(roles.standardUser);
    await t
        .click(addtoCard);
        await t
        .expect(shoppingCard.innerText).contains("1")
        .expect(removeButton.exists).ok();

});

test('Add all elements to shoppingCard', async t => {

    let j = 1
    await t
        .useRole(roles.standardUser);

    for (let i=0; i < await addToCartButton.count; i+1){ 
        await t 
            .click(addToCartButton.nth(i)) 
            .expect(shoppingCard.innerText).contains(j++); 
    }
        await t
            .expect(addToCartButton.exists).notOk()
            .expect(removeButton.exists).ok();

});


test('Add to shoppingCard last element', async t => {

    await t
        .useRole(roles.standardUser);
    await t
        .click(addToCartLastButton);
    await t
        .expect(shoppingCard.innerText).contains("1")
        .expect(removeButton.exists).ok();

});

test('Add random element to shoppingCard', async t => {

var elements = [];

    await t
        .useRole(roles.standardUser);

    for (let i=0; i < await addToCartButton.count; i++){ 
        elements.push(addToCartButton.nth(i));
    }

    const randomElement = Math.floor(Math.random() * (elements.length - 0)) + 0;
    console.log('random element is', randomElement)

    await t
            .click(addToCartButton.nth(randomElement));
    await t
            .expect(shoppingCard.innerText).contains("1")
            .expect(removeButton.exists).ok();

});