interface Task {
    ID : number;
    Title : string;
    States : string;
    StartDate : string;
    EndDate : string ;
}

let tasks : Task []= JSON.parse(localStorage.getItem("")||"[]")