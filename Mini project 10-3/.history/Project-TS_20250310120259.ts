interface Task {
    ID : number;
    Title : string;
    States : string;
    StartDate : string;
    EndDate : string ;
}

let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")

function save(event) {
    event.preventDefault();
let name =(document.getElementById("name")as HTMLInputElement).value;
let title =(document.getElementById("name")as HTMLInputElement).value;
let states =(document.getElementById("name")as HTMLInputElement).value;
let startDate =(document.getElementById("name")as HTMLInputElement).value;
let endDate =(document.getElementById("name")as HTMLInputElement).value;

let taskkk :Task {
    
}
}