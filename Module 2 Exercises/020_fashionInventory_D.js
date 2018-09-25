/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

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

The task now is to find all the laced shoes.
Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.

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

var result = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

function inventoryContainLaceList(inventory){

  var inventoryList = [];
  // get the list of each brand

  for (var i in inventory){
    // get all the shose that has lace by brand name, if no shose has lace in that barnd we get empty array
   if (listOfBrand(inventory[i]).length !== 0){
       inventoryList = inventoryList.concat( listOfBrand(inventory[i]) );
     }
  }

  return inventoryList ;
}

function listOfBrand(brand){
  // list all the shoses of one brand with lace

  var shoesListWithLacee = [];
  var shoes = brand.shoes;

  for ( var i =0; i<shoes.length; i++){

    if (shoes[i].name.includes('lace') ){
      var idx = 0;
      var words = shoes[i].name.split(" ");
      for (var j =0; j<words.length; j++){
        if(words[j].includes('lace')){
          idx = j;
        }
      }

      var shoseWithLace = {};
      shoseWithLace['nameWords'] = words;
      shoseWithLace['targetWordIndex'] = idx;

      shoesListWithLacee.push(shoseWithLace);
    }

  }
  return shoesListWithLacee;
}

function assertObjEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed', testName)
  } else {
    console.log('FAILED:', testName, 'got', actual, 'expected', expected);
  }
}

assertObjEqual(inventoryContainLaceList(currentInventory),result,'Inventory Contain Lace List');
//console.log(JSON.stringify(inventoryContainLaceList(currentInventory)));
