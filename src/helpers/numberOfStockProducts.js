import numberOfPurchasedProducts from "./numberOfPurchasedProducts.js";
import numberOfSoldProducts from "./numberOfSoldProducts.js";

function numberOfStockProducts(){
    const  soldProduct = numberOfSoldProducts();
    const  purchasedProducts = numberOfPurchasedProducts();
    return purchasedProducts - soldProduct;
}

export default numberOfStockProducts;