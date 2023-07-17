const inputbox = document.getElementById("input-text");
const list = document.getElementById("list");

function addtask() {
  if (inputbox.value === "") {
    alert("please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add("edit");
    span.innerHTML = "edit";
    li.appendChild(span);
    let span1 = document.createElement("span");
    span1.classList.add("material-symbols-outlined");
    span1.classList.add("delete");
    span1.innerHTML = "delete";
    li.appendChild(span1);
  }
  inputbox.value = "";
  save();
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    save();
  } else if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    let editinput = document.createElement("input");
    editinput.type = "text";
    editinput.value = li.firstChild.textContent; 
    li.replaceChild(editinput, li.firstChild);
    save();
    let savebtn = document.createElement("span");
    savebtn.classList.add("material-symbols-outlined");
    savebtn.classList.add("save");
    savebtn.innerHTML = "save";
    li.appendChild(savebtn);
    savebtn.addEventListener('click', saveEditedTask);
    
  }
  function saveEditedTask() {
    var li =e.target.parentElement;
    
    var editInput = li.querySelector('input[type="text"]');
    li.textContent = editInput.value;
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.classList.add("edit");
    span.innerHTML = "edit";
    li.appendChild(span);
    let span1 = document.createElement("span");
    span1.classList.add("material-symbols-outlined");
    span1.classList.add("delete");
    span1.innerHTML = "delete";
    li.appendChild(span1);
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

  const search_input = document.getElementById("search");
  const searchbtn = document.getElementById("search_btn");
  searchbtn.addEventListener("click",search) ;
  function search(e) {
    const tasklist = list.childNodes;
    tasklist.forEach(function (task) {
        if (task.nodeName === "LI") {
            if (task.textContent.search(search_input.value)== -1){
                task.style.display = "none";
            }
            else{
                task.style.display = "flex";
            }
        }
    })
};
