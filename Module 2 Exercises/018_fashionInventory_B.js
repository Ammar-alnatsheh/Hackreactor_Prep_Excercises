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

Now output the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

Write your own unit tests.

*/

function shoesAverageCostPerDesigner(inventory){

  var designersAveragePrice = [];
  // get the avg cost per each designer

  for (var i in inventory){

    var designer = {};
    designer['name'] = inventory[i].name;
    designer['averagePrice'] = AverageCostPerDesigner(inventory[i]);

    designersAveragePrice.push(designer);
  }

  var result = {};
  result['designers'] = designersAveragePrice;
  return result;
}

function AverageCostPerDesigner(brand){
  // list all the shoses of one brand with thier price

  var totalShoesPrices = 0;
  var shoes = brand.shoes;

  for ( var i =0; i<shoes.length; i++){
    totalShoesPrices += shoes[i].price;
  }

  return totalShoesPrices / shoes.length;
}

function assertObjectsEqual(actual, expected, testName) {
  var equal = true;

  for ( i in expected) {

    if ( actual[i].averagePrice !== expected[i].averagePrice ) {
      equal = false;
      break;
    }

  }

  if ( Object.keys(actual).length !== Object.keys(expected).length ){
    equal = false;
  }

  if ( equal ) {
    console.log('passed');

  } else {
    console.log("FAILED [" + testName + "] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
  }
}


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

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

assertObjectsEqual(shoesAverageCostPerDesigner(currentInventory),expected,'Shoes Average Cost Per Designer');
