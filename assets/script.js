const inputbox = document.getElementById("input-text");
const list = document.getElementById("list");

function addtask(){
    if(inputbox.value === ''){
        alert("please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.classList.add("material-symbols-outlined");
        span.innerHTML = "delete";
        li.appendChild(span);
    }
    inputbox.value = '';
    save();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
});

function save(){
    localStorage.setItem("data",list.innerHTML);
}
function show(){
    list.innerHTML= localStorage.getItem("data")
}
show();


const filteroption = document.getElementById("filter");
filteroption.addEventListener("click",filter) ;

function filter(e) {
    const tasklist = list.childNodes;
    tasklist.forEach(function (task) {
      if (task.nodeName === "LI") {
        switch (e.target.value) {
          case "Show_All":
            task.style.display = "flex";
            break;
          case "Show_Completed":
            if (task.classList.contains("checked")) {
              task.style.display = "flex";
            } else {
              task.style.display = "none";
            }
            break;
          case "Show_Uncompleted":
            if (!task.classList.contains("checked")) {
              task.style.display = "flex";
            } else {
              task.style.display = "none";
            }
            break;
        }
      }
    });
  }