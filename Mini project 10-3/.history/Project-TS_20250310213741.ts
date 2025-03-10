interface Task {
    ID : number;
    Title : string;
    Discription :string;
    States : string;
    StartDate : string;
    EndDate : string ;
}

// let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")

function save(event) {
    event.preventDefault();
    
let title =(document.getElementById("title")as HTMLInputElement).value;
let discription =(document.getElementById("discription")as HTMLInputElement).value;
// let states =(document.getElementById("states")as HTMLInputElement).value;
let startDate =(document.getElementById("startDate")as HTMLInputElement).value;
let endDate =(document.getElementById("endDate")as HTMLInputElement).value;

let taskkk :Task ={
ID :Date.now(),
Title :title,
Discription :discription,
States :"to do",
StartDate : startDate,
EndDate :endDate
}
var product = localStorage.getItem("Products")

// tasks.push(taskkk);
// localStorage.setItem("task",JSON.stringify(tasks));
}

var productData = product ? JSON.parse(product) : [];

productData.push(productItems);


localStorage.setItem("Products", JSON.stringify(productData));