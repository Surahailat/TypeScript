// let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")
function save(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var discription = document.getElementById("discription").value;
    // let states =(document.getElementById("states")as HTMLInputElement).value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var taskkk = {
        ID: Date.now(),
        Title: title,
        Discription: discription,
        States: "to do",
        StartDate: startDate,
        EndDate: endDate
    };
    var product = localStorage.getItem("task");
    var tasks = product ? JSON.parse(product) : [];
    tasks.push(taskkk);
    localStorage.setItem("task", JSON.stringify(tasks));
    viewProducts();
}
//view 
function viewProducts() {
    var view = document.getElementById("view");
    var product = localStorage.getItem("task");
    var tasks = product ? JSON.parse(product) : null;
    if (view) {
        for (var i = 0; i < tasks.length; i++) {
            view.innerHTML += "\n                <div class=\"container d-flex justify-content-center mt-5\" >\n<div class=\"task-card\">\n<span class=\"badge\">Main</span>\n<h5>".concat(tasks[i].Title, "</h5>\n<p>").concat(tasks[i].Discription, "</p>\n<div class=\"date\">\n    <i class=\"fa-regular fa-calendar\"></i>\n    <span>").concat(tasks[i].StartDate, "</span>\n<span>&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;</span>\n<i class=\"fa-regular fa-calendar\"></i>\n<span>").concat(tasks[i].EndDate, "</span>\n</div>\n<div class=\"divider\"></div>\n<div class=\"actions\">\n    <button class=\"completed-btn\">").concat(tasks[i].States, "</button>\n    <div>\n        <i class=\"fa-regular fa-star icon\"></i>\n        <button class=\"delete-btn\"><i class=\"fa-regular fa-trash-can\"></i></button>\n    </div>\n</div>\n</div>\n</div>\n\n        ");
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
