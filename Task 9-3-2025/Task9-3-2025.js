// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
var Check = { Name: "Sura", Age: 25 };
function Print(p) {
    if (p.Age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
Print(Check);
var teachers = { name: "hala", subjects: ["Math", "English"] };
function printTech(item) {
    item.subjects.forEach(function (element) {
        console.log(element);
    });
}
printTech(teachers);
var products = [
    { Name: "Pitza", Price: 5, quantity: 10 },
    { Name: "Burger", Price: 7, quantity: 4 },
    { Name: "Pasta", Price: 3, quantity: 11 },
    { Name: "SeaFood", Price: 15, quantity: 3 },
];
function decrease(p) {
    products.forEach(function (element) {
        if (element.quantity > 5) {
            element.quantity = (element.quantity) - element.quantity * 0.15;
        }
    });
}
decrease(products);
console.log(products);
var productData = JSON.parse(localStorage.getItem("product") || "[]");
function save(event) {
    event.preventDefault();
    var Name = document.getElementById("name").value;
    var Description = document.getElementById("description").value;
    var Price = parseInt(document.getElementById("price").value);
    var Quantity = parseInt(document.getElementById("quantity").value);
    var pro = {
        name: Name,
        description: Description,
        price: Price,
        quantity: Quantity
    };
    productData.push(pro);
    localStorage.setItem("product", JSON.stringify(productData));
}
function display() {
    var container = document.getElementById("data");
    if (container) {
        container.innerHTML = "";
        productData.forEach(function (element) {
            container.innerHTML += "\n            <p>".concat(element.name, "</p>\n            <p>").concat(element.description, "</p>\n            <p>").concat(element.price, "</p>\n            <p>").concat(element.quantity, "</p>\n\n            ");
        });
    }
}
