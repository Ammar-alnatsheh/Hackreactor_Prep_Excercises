/*
You have a fashion catalog, an inventory of items from various high-fashion designers.
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
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

Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...

// ^ this implies that the return value is a string, with each new line separated by a newline symbol ('\n')

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

var result = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900";

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
    shoesListWithPrice.push(shoes[i].name + ", " + shoes[i].price);
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

assertEqual(currentInventoryList(currentInventory),result,'Current Inventory List');
