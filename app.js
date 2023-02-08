//write a constructor function, that accepts 2 parameters:
// name
// src

//this function should represent a product, and also have 2 other properties
//clicks
//views
//that start at 0

//lastley, the constructor should have a property which is an array.
//each time a new instance of the product is created, it should push inself into the array

//call the constructor Product

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

// using this array create a new product for each item
// the name of the product should be the item in the array
// the src of the product should be like so
// images/productNames.jpg

const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `images/${productNames[i]}.jpg`);
}

// use google to help you
// write a function that returns a random number
// the number will represent an index value for one of the items in the Product.allProducts array
// you are not allowed to use your own previous project.

// function getRandomNumber(
//   let randomNumber = Math.floor(Math.random() * productNames.length + 1 )
// )

function randomProductIndex() {
  let randomNumber = Math.floor(Math.random() * Product.allProducts.length);
  return randomNumber;
}

// write a function to render our images
// have the images be choosen randomly from our product.allProducts array
// hint, use randomProductionInndex() and bracket notation to access the item in the array.

function renderImages() {
  // get three indexes for my product array
  let index1 = randomProductIndex();
  let index2 = randomProductIndex();
  let index3 = randomProductIndex();

  // make sure none of them are the same
  while (index1 === index2 || index1 === index3 || index2 === index3) {
    index2 = randomProductIndex();
    index3 = randomProductIndex();
  }

  //retrieve our image elements
  const image1 = document.getElementById("img1");
  const image2 = document.getElementById("img2");
  const image3 = document.getElementById("img3");

  //change the src attribute of image1, image2, image3 to be the src from our random products.

  image1.src = Product.allProducts[index1].src;
  image2.src = Product.allProducts[index2].src;
  image3.src = Product.allProducts[index3].src;

  image1.alt = Product.allProducts[index1].name;
  image2.alt = Product.allProducts[index2].name;
  image3.alt = Product.allProducts[index3].name;
}
renderImages();

//make sure the user is clicking on one of the images (click alt of event.target)
//increase the clicks on the clicked product object (for loop and clicks++)

function handleClick(event) {
  //check if the thing we clicked on is in the container (as opposed to an image)
  if (event.target === imgContainer) {
    alert("Please click on an image");
    return; // this returns stops the function
  }

  //check every single products "name" against the alt tag of the target, and increase the clicks
  let clickedProduct = event.target.alt;
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (clickedProduct === Product.allProducts[i].name) {
      Product.allProducts[i].clicks++;
      //console.log to check the clicks are being added.
      console.log(Product.allProducts[i].name + " " + Product.allProducts[i].clicks);
      break; // stop the loop, because we found our product.
    }
  }

  // get three new images
  renderImages();
}

const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);
