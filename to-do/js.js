loadEvents();

function loadEvents(){
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click',clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
        addTask(input.value);
    input.value='';    
}

function clearList(e){
    let ul = document.querySelector('ul').innerHTML = '';
  }

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete"><i class="fas fa-trash-alt"></i></span><input type = "checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.dispaly = 'block';
}

function deleteOrTick(e){
    if(e.target.className == 'delete')
      deleteTask(e);
    else {
      tickTask(e);
    }
  }
  
  function deleteTask(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }
  
  function tickTask(e){
    const task = e.target.nextSibling;
    if(e.target.checked){
      task.style.textDecoration = "line-through";
      task.style.color = "gray";
    }else {
      task.style.textDecoration = "none";
      task.style.color = "#2f4f4f";
    }
}