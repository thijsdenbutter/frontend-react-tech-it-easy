import {inventory} from '../constants/inventory.js';

function numberOfPurchasedProducts() {
    let purchasedProducts = 0;

    for (let i = 0; i < inventory.length; i++) {
        purchasedProducts += inventory[i].originalStock;
    }
    return purchasedProducts;
}

export default numberOfPurchasedProducts;