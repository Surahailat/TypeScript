interface Task {
    ID: number;
    Title: string;
    Discription: string;
    States: string;
    StartDate: string;
    EndDate: string;
}

// let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")

function save(event) {
    event.preventDefault();

    let title = (document.getElementById("title") as HTMLInputElement).value;
    let discription = (document.getElementById("discription") as HTMLInputElement).value;
    // let states =(document.getElementById("states")as HTMLInputElement).value;
    let startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    let endDate = (document.getElementById("endDate") as HTMLInputElement).value;

    let taskkk: Task = {
        ID: Date.now(),
        Title: title,
        Discription: discription,
        States: "to do",
        StartDate: startDate,
        EndDate: endDate
    }
    var product = localStorage.getItem("task")
    var tasks = product ? JSON.parse(product) : [];

    tasks.push(taskkk);
    localStorage.setItem("task", JSON.stringify(tasks));

    viewProducts()
}

//view 
function viewProducts() {

    var view = document.getElementById("view");
    var product = localStorage.getItem("task")
    var tasks = product ? JSON.parse(product) : null;


    if (view) {
        for (let i = 0; i < tasks.length; i++) {
            view.innerHTML += `
<div class="task-card">
<span class="badge">Main</span>
<h5>${tasks[i].Title}</h5>
<p>${tasks[i].Discription}</p>
<div class="date">
    <i class="fa-regular fa-calendar"></i>
    <span>${tasks[i].StartDate}</span>
<span>&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;</span>
<i class="fa-regular fa-calendar"></i>
<span>${tasks[i].EndDate}</span>
</div>
<div class="divider"></div>
<div class="actions">
    <button class="completed-btn">${tasks[i].States}</button>
    <div>
        <i class="fa-regular fa-star icon"></i>
        <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
    </div>
</div>
</div>

        `;
        }

    }

}
// <div class="task-card">
// <span class="badge">Main</span>
// <h5>${tasks[i].Title}</h5>
// <p>${tasks[i].Discription}</p>
// <div class="date">
//     <i class="fa-regular fa-calendar"></i>
//     <span>${tasks[i].StartDate}</span>
// <span>&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;</span>
// <i class="fa-regular fa-calendar"></i>
// <span>${tasks[i].EndDate}</span>
// </div>
// <div class="divider"></div>
// <div class="actions">
//     <button class="completed-btn">${tasks[i].States}</button>
//     <div>
//         <i class="fa-regular fa-star icon"></i>
//         <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
//     </div>
// </div>
// </div>