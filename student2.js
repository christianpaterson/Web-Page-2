const companyname4 = "Echoes of Innovation";
const address4 = "269 Main St. Valencia, CA 91344";
const phonenumber5 = "(555) 861-1234";

const headerContainer = document.getElementById('head269');
const footerContainer = document.getElementById('foot861');

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