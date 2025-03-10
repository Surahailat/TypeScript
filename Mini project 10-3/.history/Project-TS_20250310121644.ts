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
let ID =(document.getElementById("ID")as HTMLInputElement).value;
let title =(document.getElementById("title")as HTMLInputElement).value;
let states =(document.getElementById("states")as HTMLInputElement).value;
let startDate =(document.getElementById("startDate")as HTMLInputElement).value;
let endDate =(document.getElementById("endDate")as HTMLInputElement).value;

let taskkk :Task ={
    name=
}
}