// Lab Assignment #7
var companyname4 = "Echoes of Innovation dvds";
var address4 = "269 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 861-1234";
var imgurl797 = 'http://www.college1.com/images/';
var cardimgurl247 = 'http://www.college1.com/images/cards/gbCard';

var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"};
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"};
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};

const headerContainer = document.getElementById('head269');
const footerContainer = document.getElementById('foot861');
const menuContainer = document.getElementById('menu933');
const mainContainer = document.getElementById('main718');
const product1Btn = document.getElementById('product1Btn');
const product2Btn = document.getElementById('product2Btn');
const product3Btn = document.getElementById('product3Btn');


function getHeader() {
  headerContainer.innerHTML = `
  <div>
    <h1>${companyname4}</h1>
    <h3>${address4}</h3>
    <h3>${phonenumber5}</h3>
  </div>
  `;
}

function getFooter(name, address, phone) {
  footerContainer.innerHTML = `
  <div>
    <h5>${name}</h5>
    <h6>${address}</h6>
    <h6>${phone}</h6>
  </div>
  `;
}

getHeader();
getFooter(companyname4, address4, phonenumber5);


// Lab Assignment #8 & 9
function makeMenu4(size) {
  menuContainer.innerHTML += `

  `;
}



function makeMain2(myproduct) {
  mainContainer.innerHTML = `
    <h2>My Product: </h2><br>
    <h3>Product Name: ${myproduct.name}</h3><br>
    <h5>Product ID: ${myproduct.id}</h5><br>
    <h5>Product Description: ${myproduct.desc}</h5><br>
    <h5>Shopping Cart Link Bar </h5><br>
    <h5>Product Image: ${imgurl797}${myproduct}</h5><br>
  `;
}


function execButton453(productObject) {
  makeMain2(productObject);
}


product1Btn.addEventListener('click', function() {
  execButton453(product1);
});

product2Btn.addEventListener('click', function() {
  execButton453(product2);
});

product3Btn.addEventListener('click', function() {
  execButton453(product3);
});


//Lab Assignment #10
var produrl = imgurl797 + myproduct.id + '.gif';  // local
// creates string containing 'http://www.college1.com/images/4426.gif'
// insert produrl into the display of product1

var cardurl = cardimgurl247 + cardnumber + '.gif';
// where cardnumber is 0 to 51 for a face up card and 52 for the back
// insert cardurl into an img tag to display cards, DO NOT forget id='cardX'

function dealCards412() {

}