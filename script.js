"use strict";
console.log(`________________________TALLEST MOUNTAIN________________________________`);
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
const findNameOfTallestMountain = (array) => {
    let tallestMountain = array[0];
    array.forEach((peak) => {
        if (peak.height > tallestMountain.height) {
            tallestMountain = peak;
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
console.log(`________________________PRODUCTS________________________________`);
let products = [
    {
        name: "small",
        price: 40,
    },
    {
        name: "medium",
        price: 160,
    },
    {
        name: "large",
        price: 320,
    },
];
const calcAverageProductPrice = (array) => {
    let sumOfProducts = 0;
    array.forEach((item) => {
        sumOfProducts += item.price;
    });
    return sumOfProducts / array.length;
};
let averageCostOfProducts = calcAverageProductPrice(products);
console.log(averageCostOfProducts);
console.log(`________________________INVENTORY________________________________`);
let inventory = [
    {
        name: "motor",
        price: 10.0,
        quantity: 10,
    },
    {
        name: "sensor",
        price: 12.5,
        quantity: 4,
    },
    {
        name: "LED",
        price: 1.0,
        quantity: 20,
    },
];
const calcInventoryValue = (array) => {
    let totalValue = 0;
    array.forEach((item) => {
        totalValue += item.price * item.quantity;
    });
    return totalValue;
};
console.log(calcInventoryValue(inventory));
