import {Selector, t} from 'testcafe';
import { Role } from 'testcafe';
import * as roles from '../components/Roles';
import {doPriceList} from '../components/sortComponent'
import {priceList} from '../components/sortComponent'

fixture `SortTest`
    .page`https://www.saucedemo.com/`

    const price = Selector('.inventory_item_price');
    const sortOption = Selector('.product_sort_container');
    const fromLowerPrice = Selector("[value='lohi']");

    test('creata array with prices and check hilo sort work', async t => {
        
        //await doPriceList(t)
       

        await t
        .useRole(roles.standardUser);
        
        // var priceList = [];
        //     for (let i=0; i < await price.count; i++){
            
        //         const priceTwo = price.nth(i)
        //         let priceText = await priceTwo.textContent;
        //         let  clearPriceText = priceText.replace('$','');
        //         const priceNumber = parseFloat(clearPriceText);
        //         priceList.push(priceNumber)
        //     };
        
        let {
            priceList,
        } = doPriceList();

        console.log(priceList);

        
        var sortPriceList = priceList.sort(function(a, b){return a - b});  
        
        await t
                .click(sortOption)
                .click(fromLowerPrice);
        await t 
                .expect(price.exists).ok()
                .expect(price.nth(0).textContent).contains(sortPriceList[0])
                .expect(price.nth(-1).textContent).contains(sortPriceList[sortPriceList.length-1]);
    });