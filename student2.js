// Lab Assignment #7
var companyname4 = "Echoes of Innovation DVDs";
var address4 = "269 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 861-1234";
var imgurl797 = 'https://www.college1.com/images/';
var cardimgurl247 = 'https://www.college1.com/images/cards/gbCard';
var product4 = {};
var product5 = {};
var jsonobj4 = { "type":"dvdcd", "number":"1" };
var jsonobj5 = { "type":"dvdcd", "number":"2" };

// var product2 = { name: "Roland TR-808", id: "tr808", desc: "Legendary drum machine that revolutionized electronic music", img: "assets/drum_machine.jpg" };
// var product3 = { name: "Technics SL-1200", id: "sl1200", desc: "Classic turntable known for its exceptional performance and durability", img: "assets/retro_turntable.jpg" };

var product1 = { name: "Oldies CD Collection", id: "oldiescd", desc: "A curated collection of classic hits from the '50s and '60s, overflowing with melodies that stir the soul, beats that make you move, and unforgettable tunes that stand the test of time.", imagesrc: "assets/cds-side.jpg" };
var product2 = { name: "Boombox", id: "boombox", desc: "Blast your new favorite CDs with our vintage-inspired portable stereo system. This sleek and captivating retro boombox, adorned with built-in speakers, sets the stage for an immersive musical experience and invites unforgettable moments.", imagesrc: "assets/boombox.jpg" };
var product3 = { name: "Old Televisions", id: "oldtvs", desc: "Watch your DVDs in style. Fully restored vintage televisions with their iconic designs and authentic analog experience. These relics of timeless charm transport you back to a bygone era of enchanting family gatherings and captivating historic moments.", imagesrc: "assets/kids_tvs.jpg" };


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
      <h5>${companyname4} - ${address4} - ${phonenumber5}</h5>
    </div>
  `;
}

function getFooter(name, address, phone) {
  footerContainer.innerHTML = `
    <div>
      <h5>${name} - ${address} - ${phone}</h5>
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
  var produrl = imgurl797 + myproduct.id + '.gif';  // local
  
  mainContainer.innerHTML = `
    <h3>${myproduct.name}</h3><br>
    <img src="${myproduct.imagesrc}" width="500"><br style="height: 30px;"><br>
    <h4 style="width: 60%; margin: 0 auto; text-align: center;">${myproduct.desc}</h4><br>
    <h5 style="display: block; margin: 0 auto; text-align: center;" id="linkbar"></h5>
    <h6>Product ID: ${myproduct.id}</h6>
  `;
  makeLinkBar881();
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


// Lab Assignment #10 - 12

function makeLinkBar881() {
  let linkBar = document.querySelector('#linkbar');
  linkBar.innerHTML = `
    <form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>
      <input type='hidden' name='business' value=‘’>
      <input type='hidden' name='cmd' value='_cart'>
      <input type='hidden' name='add' value='1'>
      <input type='hidden' name='item_name' value=''>
      <input type='hidden' name='amount' value=’20’>
      <input type='hidden' name='currency_code' value='USD'>
      <input style="display: block; margin: 0 auto; text-align: center;" id="add-to-cart" type='image' name='submit'
        src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif'
        alt='Add to Cart'>
      <img alt='' width='1' height='1'
        src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'>
    </form>
  `;
}

// Lab Assignment #13
let adnum409 = 1;
let winobj373 = 0;

function popupAd536() {

  if(winobj373 < 2) {
    winobj373++;
  } else {
    winobj373 = 0;
  }

  var adContents = [
  `
    <html>
    <head>
      <title>Buy one get one free <3</title>
    </head>
    <body>
      <h1>Get extra tunes for a great price!!</h1>
      <p>(Offer ends June 31st)</p>
    </body>
    </html>
  `,
  `
    <html>
    <head>
      <title>15% Off! If you refer a friend</title>
    </head>
    <body>
      <h1>Send us screenshot of your purchase!</h1>
      <p>Earn extra store credit</p>
    </body>
    </html>
  `,
  `
    <html>
    <head>
      <title>Special Father's Day Sale</title>
    </head>
    <body>
      <h1>50% off for all Dads</h1>
      <p>(25% off gifts for dad's)</p>
    </body>
    </html>
  `
  ];

var adWindow = window.open('', '_blank', 'width=500,height=400');
adWindow.document.open();
adWindow.document.write(adContents[winobj373]);
adWindow.document.close();
}

function closeAd536() {
  adWindow.document.close();
}


// Lab Assignment #13 & 14
function makeForm835() {

}

var form = document.querySelector("#contact-form");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (checkForm804()) {
    var formData = new FormData(form);
    
    fetch("https://www.college1.com/classes/javascript/survey.php", {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      // Handle the response from the server if needed
    })
    .catch(function(error) {
      // Handle any error that occurs during the request
    });
  }
});

function checkForm804() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var stateInput = document.getElementById("state");
    var zipInput = document.getElementById("zip");
    var messageInput = document.getElementById("message");
    
    var missingFields = [];
    
    if (nameInput.value.trim() === "") {
      missingFields.push("name");
    }
    
    if (emailInput.value.trim() === "") {
      missingFields.push("email");
    }
    
    if (addressInput.value.trim() === "") {
      missingFields.push("address");
    }
    
    if (cityInput.value.trim() === "") {
      missingFields.push("city");
    }
    
    if (stateInput.value.trim() === "") {
      missingFields.push("state");
    }
    
    if (zipInput.value.trim() === "") {
      missingFields.push("zip");
    }

    if (messageInput.value.trim() === "") {
      missingFields.push("message");
    }
    
    if (missingFields.length > 0) {
      alert("Please fill in the following fields:\n\n" + missingFields.join(", "));
      return false; // Cancel form submission
    }
    
    // Form validation passed, submit the form
    return true;
}


// Lab Assignment #15

var product4 = {};
var product5 = {};
var jsonobj4 = { "type":"dvdcd", "number":"1" };
var jsonobj5 = { "type":"dvdcd", "number":"2" };

function getProduct543(jsonobj, callback) {
  var server = 'https://www.college1.com/getproduct.php';
  var jsonstr = JSON.stringify(jsonobj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", server+"?jsonstr=" + jsonstr, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {  
    if (this.readyState == 4 && this.status == 200) {
    replystr =  this.responseText;
      if (product4 == null) {
        product4 = JSON.parse(replystr);
      }
      else if (product5 == null) {
        product5 = JSON.parse(replystr);
      }
      else {
        console.log('Error, no object variable available');
      }
      var parsedProduct = JSON.parse(replystr);
      callback(parsedProduct);
    }
  };
}

const product4Btn = document.getElementById('product4Btn');
const product5Btn = document.getElementById('product5Btn');

product4Btn.addEventListener('click', function() {
  getProduct543(jsonobj4, function(product) {
    product4 = product;
    execButton453(product4);
  });
});

product5Btn.addEventListener('click', function() {
  getProduct543(jsonobj5, function(product) {
    product5 = product;
    execButton453(product5);
  });
});