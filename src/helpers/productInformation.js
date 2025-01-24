import {bestSellingTv} from '../constants/inventory.js';

function productInformation() {
    return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export default productInformation;