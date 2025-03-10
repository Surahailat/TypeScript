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
var product = localStorage.getItem("task")
var tasks = product ? JSON.parse(product) : [];

tasks.push(taskkk);
localStorage.setItem("task",JSON.stringify(tasks));
}

//view 
function viewProducts() {

    var view = document.getElementById("view");
    var product = localStorage.getItem("task")
    var tasks = product ? JSON.parse(product) : null;


    if (view) {
        for (let i = 0; i < tasks.length; i++) {
            view.innerHTML += `
        <h1>${productData[i].name}<h1>
        <h1>${productData[i].description}<h1>
        <h1>${productData[i].price}<h1>
        <h1>${productData[i].quantity}<h1>
        `;
        }

    }

}
