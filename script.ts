console.log(
  `________________________TALLEST MOUNTAIN________________________________`
);

interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
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

const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMountain: Mountain = array[0];
  array.forEach((peak) => {
    if (peak.height > tallestMountain.height) {
      tallestMountain = peak;
    }
  });
  return tallestMountain.name;
};

console.log(findNameOfTallestMountain(mountains));

console.log(`________________________PRODUCTS________________________________`);

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
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

const calcAverageProductPrice = (array: Product[]): number => {
  let sumOfProducts: number = 0;
  array.forEach((item) => {
    sumOfProducts += item.price;
  });
  return sumOfProducts / array.length;
};

let averageCostOfProducts: number = calcAverageProductPrice(products);

console.log(averageCostOfProducts);

console.log(
  `________________________INVENTORY________________________________`
);

interface InventoryItem extends Product {
  quantity: number;
}

let inventory: InventoryItem[] = [
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

const calcInventoryValue = (array: InventoryItem[]): number => {
  let totalValue: number = 0;
  array.forEach((item) => {
    totalValue += item.price * item.quantity;
  });
  return totalValue;
};

console.log(calcInventoryValue(inventory));
