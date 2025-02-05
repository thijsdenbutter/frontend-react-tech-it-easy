export function sortMostSold(inventory) {
    inventory.sort((a, b) => {
        return b.sold - a.sold;
    });
    console.log(inventory);
}
export function sortLowestPrice(inventory) {
    inventory.sort((a, b) => {
        return a.price - b.price;
    });
    console.log(inventory);
}
export function sortRefreshRate(inventory) {
    inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    });
    console.log(inventory);
}
