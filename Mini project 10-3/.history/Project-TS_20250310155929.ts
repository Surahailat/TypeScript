interface Task {
    ID : number;
    Title : string;
    Discription
    States : string;
    StartDate : string;
    EndDate : string ;
}

let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")

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
States :"to do",
StartDate : startDate,
EndDate :endDate
}
tasks.push(taskkk);
localStorage.setItem("task",JSON.stringify(tasks));
}