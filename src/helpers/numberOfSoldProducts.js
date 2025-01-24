import {inventory} from '../constants/inventory.js';

function numberOfSoldProducts() {
    let soldProducts = 0;

    for (let i = 0; i < inventory.length; i++) {
        soldProducts += inventory[i].sold;
    }
    return soldProducts;
}

export default numberOfSoldProducts;