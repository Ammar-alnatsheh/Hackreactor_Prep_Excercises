/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure as earlier:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

Brunello Cucinelli,tasselled black low-top lace-up,1000
Gucci,black leather laced sneakers,900
etc



Write your own unit tests.

*/

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var result = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900";

function currentInventoryList(inventory){

  var inventoryList = [];
  // get the list of each brand

  for (var i in inventory){
    var brandName = inventory[i].name;
    var brandList = listOfBrand(inventory[i]);

    // create a record for each shose with its brand name
    for (var j =0; j<brandList.length; j++){
      inventoryList.push(brandName + ", " + brandList[j]);
    }

  }

  return inventoryList.join("\n");
}

function listOfBrand(brand){
  // list all the shoses of one brand with thier price

  var shoesListWithPrice = [];
  var shoes = brand.shoes;

  for ( var i =0; i<shoes.length; i++){
    // make sure the shose is black
    if(shoes[i].name.toLowerCase().includes('black')){

        shoesListWithPrice.push(shoes[i].name + ", " + shoes[i].price);
       }
  }

  return shoesListWithPrice;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
  console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}

assertEqual(currentInventoryList(currentInventory),result,'Current Inventory List for black items');
