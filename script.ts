"use strict";

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

// an empty array will meet the interface conditions
// needed to add condition for empty array to equal a string ""

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length > 0) {
    let tallestMountain: Mountain = array[0];
    array.forEach((peak) => {
      if (peak.height > tallestMountain.height) {
        tallestMountain = peak;
      }
    });
    return tallestMountain.name;
  } else {
    return "Please Provide me With Mountains";
  }
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

// an empty array will meet the interface conditions
// needed to add condition for empty array to equal a string ""

const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length > 0) {
    let sumOfProducts: number = 0;
    array.forEach((item) => {
      sumOfProducts += item.price;
    });
    return sumOfProducts / array.length;
  } else {
    return 0;
  }
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
  if (array.length > 0) {
    let totalValue: number = 0;
    array.forEach((item) => {
      totalValue += item.price * item.quantity;
    });
    return totalValue;
  } else {
    return 0;
  }
};
console.log(calcInventoryValue(inventory));

console.log(
  `________________________INVENTORY 2 (the Correct Anser)________________________________`
);

interface InventoryItem2 {
  product: Product;
  quantity: number;
}

let inventory2: InventoryItem2[] = [
  {
    product: { name: "motor", price: 10 },
    quantity: 10,
  },
  {
    product: { name: "motor2", price: 100 },
    quantity: 10,
  },
  {
    product: { name: "motor3", price: 1000 },
    quantity: 10,
  },
];

const calcInventoryValue2 = (array: InventoryItem2[]): number => {
  if (array.length > 0) {
    let totalValue: number = 0;
    array.forEach((item) => {
      totalValue += item.product.price * item.quantity;
    });
    return totalValue;
  } else {
    return 0;
  }
};
console.log(calcInventoryValue2(inventory2));

console.log(
  `_______________Everything Below is Extra - TRAIL BLAZING________________________________`
);
console.log(
  `________________________________________________________________________________________`
);
console.log(``);

console.log(
  `________________________Tell me the Value________________________________`
);

const tellMeTheValue = (item: InventoryItem2): number => {
  return item.product.price * item.quantity;
};

console.log(tellMeTheValue(inventory2[1]));
console.log(
  tellMeTheValue({ product: { name: "Lawn Chair", price: 100 }, quantity: 13 })
);

console.log(
  `________________________Product by name and gives price________________________________`
);

const findProductByNameAndGiveMeTheValue = (
  array: InventoryItem2[],
  name: string
): number | string => {
  let found: InventoryItem2 | undefined = array.find((item) => {
    return item.product.name === name;
  });
  if (found != undefined) {
    return found.product.price * found.quantity;
  } else {
    return "no product found";
  }
};

console.log(
  findProductByNameAndGiveMeTheValue(inventory2, "motor"),
  findProductByNameAndGiveMeTheValue(inventory2, "cheeseburger")
);

console.log(
  `_____________________________Person Array Practice____________________________________________`
);

interface Person {
  firstName: string;
  siblings: string[];
}

let students: Person[] = [
  {
    firstName: "mitch",
    siblings: ["tyler", "tara"],
  },
  {
    firstName: "joe",
    siblings: ["one", "two", "threeee", "four"],
  },
  {
    firstName: "makeoveli",
    siblings: [],
  },
];

const howManySiblings = (array: Person[], name: string): number | string => {
  let found: Person | undefined = array.find((person) => {
    return person.firstName === name;
  });
  if (found != undefined) {
    return found?.siblings.length;
  } else {
    return "name is not found in the records";
  }
};

console.log(
  howManySiblings(students, "joe"),
  howManySiblings(students, "makeoveli"),
  howManySiblings(students, "lo")
);
