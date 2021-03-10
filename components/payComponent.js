import {Selector, t} from 'testcafe';

function getPaySelectors() {
    return {
        addtoCard: Selector('.inventory_item').withText("Sauce Labs Backpack").find('.btn_primary.btn_inventory'),
        shoppingCard: Selector('.fa-layers-counter.shopping_cart_badge'),
        addToCartButton: Selector('.btn_primary.btn_inventory'),
        addToCartLastButton: Selector('.inventory_item').sibling(-1).find('.btn_primary.btn_inventory'),
        removeButton: Selector('.btn_secondary.btn_inventory'),
        price: Selector('.inventory_item_price'),
    }
};

export default getPaySelectors