let cart = [];
let total = 0;

function addEggs() {
  cart.push("Eggs $1.99");
  total += 1.99;
}

function addMilk() {
  cart.push("Milk $3");
  total += 3;
}

function addButter() {
  cart.push("Butter $1.50");
  total += 1.50;
}

function addBread() {
  cart.push("Bread $1");
  total += 1;
}

function addCheese() {
  cart.push("Cheese $3");
  total += 3;
}

function checkOut() {
  document.write("<b>" + "Check Out:" + "</b>" + "<br>");
  for (element of cart) {
    document.write(element + "<br >");
  }
  document.write("<br>" + "Your grand total is $" + Math.round(total * 100)/ 100);

  document.write("<br>" + "<button onclick= location.reload()>Restart</button>")

}