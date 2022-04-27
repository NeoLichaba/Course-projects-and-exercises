
// Function created for stock_items to be sold
function Stock_item(id, name, price, quantity, total) {
  this.id = id;
  this.name = name;
  this.price = price;
  quantity = 0;
  total = 0;
}
// Stock array populated
var products = [];
var stock_item_0 = new Stock_item(120, 'St. Josephs', 120);
var stock_item_1 = new Stock_item(121, 'Tulips', 110);
var stock_item_2 = new Stock_item(122, 'Oriental Lillies', 100);
var stock_item_3 = new Stock_item(123, 'Protea Stems', 150);
var stock_item_4 = new Stock_item(124, 'Orchids', 200);
var stock_item_5 = new Stock_item(125, 'Marigolds', 150);
var stock_item_6 = new Stock_item(126, 'Champagne', 700);
var stock_item_7 = new Stock_item(127, 'White Wine', 150);
var stock_item_8 = new Stock_item(128, 'Red Wine', 150);
var stock_item_9 = new Stock_item(129, 'Spring Water', 20);

products.push(stock_item_0, stock_item_1, stock_item_2, stock_item_3, stock_item_4, stock_item_5, stock_item_6, stock_item_7, stock_item_8, stock_item_9);

// Function created for cart items to be stored
function Cart_item(stock_id, stock_name, price, quantity) {
  this.stock_id = stock_id;
  this.stock_name = stock_name;
  this.price = price;
  this.quantity = quantity;
}

// Cart array initialised
var cart = [];

// Add to cart function
function add_selection(i) { // populate cart  array with objects?
  if (cart.length == 0) {
    cart.push(new Cart_item(products[i].id, products[i].name, products[i].price, 1));
    display_all();
    return;
  } else { // check every element in the cart for increasing
    for (j = 0; j < cart.length; j++) {
      if (cart[j].stock_id == products[i].id) { // found it, increase the quantity by 1
        cart[j].quantity += 1;
        display_all();
        return;
      }
    }
    cart.push(new Cart_item(products[i].id, products[i].name, products[i].price, 1));
  }
  display_all();
  return;
}

// Remove from cart function 
  function subtract_selection(i) { 
    if (cart[i].quantity > 0) {
        cart[i].quantity --;

        if(cart[i].quantity == 0) {
            cart.splice(i, 1); 
        }
        display_all();
        return;
    }
}

//Display total function
function displayTotal() {
  document.getElementById("total").innerHTML =
    "<br/><br/>Total order amount is R" + totalCart().toFixed(2);
}

//Display count function
function displayCount() {
  document.getElementById("count").innerHTML =
    "<br/><br/>Total Items in Cart  " + countCart().toFixed(2);
}

//Count cart function
function countCart() {
  //returns total count
  var totalCount = 0; //defines the variable
  for (var i in cart) {
    totalCount += cart[i].quantity; //count of particular item and add to total count
  }
  display_all();
  return totalCount; // returns total items
}

var order_number = Math.floor((Math.random() * 5) + 1);
var order = [];

function Order () {
  this.order = order;
  }

//Order function
function addOrder() {
  for (var i = 0; i < cart.length; i++) {
    order.push(new Order(cart[i].stock_id, cart[i].stock_name, cart[i].price,cart[i].quantity)
    );
  }
  displayOrder();
  clearOrderArray();
}

//Total cart price function
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].stock_price * cart[i].quantity;
  }
  display_all();
  return totalCost;
}



//display order
function displayOrder() {
    document.getElementById("displayOrder").innerHTML += "<br><br>***************************************"; 
    document.getElementById("displayOrder").innerHTML += "<br>Order Number: " + ++order_number + ",";
    document.getElementById("displayOrder").innerHTML += "<br>Ordered Items: ";
    for(var i = 0; i < order.length; i++){
        document.getElementById("displayOrder").innerHTML += "<br>\t\tItem: " + cart[i].stock_name + " Quantity: " + cart[i].quantity + ", Total: R" + (cart[i].price * cart[i].quantity);
    }
}

//Clear cart function
function clearOrderArray() {
    order = [];
}


// Display the stock array to the user, made up of stock_item objects
function display_all() {

  var myTable = 
  "<table><th style='width: 100px; color: red; text-align: right;'>ID</th>";
  myTable += 
  "<th style='width: 100px; color: red; text-align: right;'>Name</th>";
  myTable += 
  "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
  myTable += 
  "<th style='width: 100px; color: red; text-align: right;'>Action</th>";
  

  for (i = 0; i < products.length; i++) {
    myTable += 
    "<tr><td style='width: 100px; text-align: right;'>" + products[i].id + "</td>";
    myTable += 
    "<td style='width: 100px; text-align: right;'>" + products[i].name + "</td><";
    myTable += 
    "<td style='width: 100px; text-align: right;'>" + products[i].price + "</td>";
       myTable += 
    "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
    
  }

  myTable += 
  "</table><br><h2>Shopping Cart :</h2>";

  var myCart = 
  "<table><th style='width: 100px; color: red; text-align: right;'>ID</th>";
  myCart += 
  "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
  myCart += 
  "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
  myCart += 
  "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
  myCart += 
  "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
  myCart += 
  "<th style='width: 100px; color: red; text-align: right;'>Action</th>";

  var totalCost = 0;

  for (i = 0; i < cart.length; i++) {
    myCart += 
    "<tr><td style='width: 100px; text-align: right;'>" + cart[i].stock_id + "</td>";
    myCart += 
    "<td style='width: 100px; text-align: right;'>" + cart[i].stock_name + "</td>";
    myCart += 
    "<td style='width: 100px; text-align: right;'>" + cart[i].price + "</td>";
    myCart += 
    "<td style='width: 100px; text-align: right;'>" + cart[i].quantity + "</td>";
    myCart += 
    "<td style='width: 100px; text-align: right;'>" + parseFloat(cart[i].price) * parseInt(cart[i].quantity) + "</td>";
    myCart += 
    "<td><button onclick='subtract_selection(" + i + ")'>Subtract</button></td>";

    totalCost += parseFloat(cart[i].price) * parseInt(cart[i].quantity).toFixed(2);
  }

  
  myCart += '</table>';

  myCart += 
  "<br/><br/> Total amount in your shopping cart is: <br/>";
  var output = "";
  for (var i in cart) {
    output += "<li>" + " cart[i].stock_name " + " x " + "cart[i].quantity" + "</li>"
  }
  
  myCart += 
  "<br/><br/> Total: " + totalCost + "</p>";

  myCart += 
  "<br/><br/><td><button onclick='addOrder()'>Check Out</button></td>";
  myCart += 
  "<br/><td><button onclick='displayCount()'>Number of Items</button></td>";

  myCart += 
  "<br/><br/><td><button onclick='displayTotal()'>Total Amount</button></td>";
 
  document.getElementById('demo').innerHTML = myTable;
  document.getElementById('cart').innerHTML = myCart;
  document.getElementById('total').innerHTML = totalCost;
}


window.onload = function () {
  display_all();
};
