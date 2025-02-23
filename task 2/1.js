let addButton=document.getElementById('adding');
let input=document.getElementById('inputting');
let tasks=document.getElementById('tasks');

addButton.addEventListener('click', function(){
    let taskText=input.value.trim();

    if(taskText===''){
        alert('Task cannot be empty');
        return;
    }

    let taskItem=document.createElement('li');

    let taskCont=document.createElement('span');
    taskCont.textContent=taskText;

    let done=document.createElement('input');
    done.className='doneButt';
    done.type='checkbox';

    let deleting=document.createElement('button');
    deleting.textContent='🗑';
    deleting.className='deletingButt';

    taskItem.appendChild(taskCont);
    taskItem.appendChild(deleting);
    taskItem.appendChild(done);

    tasks.appendChild(taskItem);

    input.value='';

    deleting.addEventListener('click', function(){
        taskItem.remove();
    });

    done.addEventListener('change', function(){
        if(done.checked){
            taskCont.style.textDecoration='line-through';
        }
        else{
            taskCont.style.textDecoration='none';
        }
    });


});