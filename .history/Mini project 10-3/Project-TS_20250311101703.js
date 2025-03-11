// let tasks : Task []= JSON.parse(localStorage.getItem("task")||"[]")
function save(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var discription = document.getElementById("discription").value;
    // let states =(document.getElementById("states")as HTMLInputElement).value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    // if (!title || !discription || !startDate || !endDate) {
    //     alert("يرجى ملء جميع الحقول قبل الحفظ!");
    //     return;
    // }
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
        view.innerHTML = "";
        if (tasks.length === 0) {
            view.innerHTML = "<p>No tasks available.</p>";
            return;
        }
        for (var i = 0; i < tasks.length; i++) {
            view.innerHTML += "\n                \n<div class=\"task-card\">\n<span class=\"badge\">Main</span>\n<h5>".concat(tasks[i].Title, "</h5>\n<p>").concat(tasks[i].Discription, "</p>\n<div class=\"date\">\n    <i class=\"fa-regular fa-calendar\"></i>\n    <span>").concat(tasks[i].StartDate, "</span>\n<span>&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;</span>\n<i class=\"fa-regular fa-calendar\"></i>\n<span>").concat(tasks[i].EndDate, "</span>\n</div>\n<div class=\"divider\"></div>\n<div class=\"actions\">\n    <button class=\"completed-btn\">").concat(tasks[i].States, "</button>\n    <div>\n        <i class=\"fa-regular fa-star icon\"></i>\n        <button class=\"delete-btn\"><i class=\"fa-regular fa-trash-can\"></i></button>\n    </div>\n</div>\n</div>\n</div>\n\n        ");
        }
    }
}
