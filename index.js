// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
function upperCaseCustomerName() {
  return (customerName = customerName.toUpperCase());
}
function setBestCustomer() {
  return (bestCustomer = "not bob");
}
function overwriteBestCustomer(name) {
  return (bestCustomer = name);
}
const leastFavoriteCustomer = "Shalom";

function changeLeastFavoriteCustomer() {
  return (leastFavoriteCustomer = "gf");
}
