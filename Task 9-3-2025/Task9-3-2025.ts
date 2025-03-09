// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person {
    Name : string;
    Age : number;
}

let Check : Person ={Name:"Sura" ,Age:25};


function Print(p:Person) {
    if (p.Age>18) {
        console.log("Adult");
        
    }else{
        console.log("Minor");
    }
}
Print(Check);


// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects).
//  Print all the subjects the teacher teaches.

interface Teacher {
    name : string;
    subjects :string[];
}

let teachers : Teacher ={name:"hala",subjects:["Math","English"]}


function printTech(item:Teacher) {
item.subjects.forEach(element => {
    console.log(element);
    
});
}
printTech(teachers);


// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity.
//  Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

interface Product{
    Name : string;
    Price : number;
    quantity :number
}

let products: Product[]=[
{Name: "Pitza" , Price :5 ,quantity:10},
{Name: "Burger" , Price :7 ,quantity:4},
{Name: "Pasta" , Price :3 ,quantity:11},
{Name: "SeaFood" , Price :15 ,quantity:3},
]

function decrease(p:Product[]) {
    products.forEach(element => {
        if (element.quantity>5) {
            element.quantity=(element.quantity)-element.quantity*0.15
        }
    });
}
decrease(products);
console.log(products);

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , Description, Price and Quantity) 
// for product and when you submit the form it will save the product inside array in the local storage and then 
// display all the products as a cards under the form.
// *use interface to create a structure for this product

interface Product2 {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

let productData : Product2 []=JSON.parse (localStorage.getItem("product") || "[]");


function save(event ) {
    event.preventDefault();
    let Name= (document.getElementById("name") as HTMLInputElement).value;
    let Description= (document.getElementById("description") as HTMLInputElement).value;
    let Price= parseInt((document.getElementById("price") as HTMLInputElement).value);
    let Quantity=parseInt(( document.getElementById("quantity") as HTMLInputElement).value);


    let pro : Product2 ={
        name :Name,
        description : Description,
        price :Price,
        quantity : Quantity
    }
    productData.push(pro);
    localStorage.setItem("product",JSON.stringify(productData));
}


function display() {
    let container =document.getElementById("data");
    if (container) {
        container.innerHTML="";
        productData.forEach(element => {
            container.innerHTML+=`
            <p>${element.name}</p>
            <p>${element.description}</p>
            <p>${element.price}</p>
            <p>${element.quantity}</p>

            `
        });
    }
}