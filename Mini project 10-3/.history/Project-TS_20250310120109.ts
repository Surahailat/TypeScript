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
let tit =(document.getElementById("name")as HTMLInputElement).value;
let name =(document.getElementById("name")as HTMLInputElement).value;
let name =(document.getElementById("name")as HTMLInputElement).value;
let name =(document.getElementById("name")as HTMLInputElement).value;

}