

const card=(t)=>`<li id="task" class="${t}">
<input type="checkbox" class="checkBox" id="check">
<h3 class="taskType">${t}</h3>
<div id="Buttons">
    <i class="fa-solid fa-trash-can" id="del"></i>
    <i class="fa-solid fa-chevron-up" id="up"></i>
    <i class="fa-solid fa-angle-down" id="down"></i>
</div> 
</li>`;

const arr=[];

const task=document.querySelector('.collection');
const add=document.querySelector('#add');
const input=document.querySelector('#taskInputArea');
let dells=document.querySelectorAll('#del');
let ups=document.querySelectorAll('#up');
let downs=document.querySelectorAll('#down');
let check=document.querySelectorAll('#check');
let h3=document.querySelectorAll('.taskType');
let li=document.querySelectorAll('#task');



function updateButtonList(){
    dells=document.querySelectorAll('#del');
    ups=document.querySelectorAll('#up');
    downs=document.querySelectorAll('#down');
    check=document.querySelectorAll('#check');
    h3=document.querySelectorAll('.taskType');
    li=document.querySelectorAll('#task');
}

function checkbox(){
    for(let i=0; i<arr.length; i++){
        check[i].addEventListener('click',function(){
            if(check[i].checked===true){
                li[i].style.filter="grayscale(100%)";
                h3[i].style.textDecoration="line-through";
            }
            else{
                li[i].style.filter="grayscale(0%)";
                h3[i].style.textDecoration="none";
            }
        })
        updateButtonList();
    }
}


function goUp(){    //up button
    for(let i=0; i<ups.length;i++){
        ups[i].addEventListener('click',function(){
            
            let str=ups[i].parentNode.parentNode;
           
            let a=arr.indexOf(str.outerHTML);
            if(a>0){
                [arr[a-1], arr[a]] = [arr[a], arr[a-1]];
            }
            
            task.innerHTML=arr.join(' ');
            
        })
        updateButtonList();
        
    }
}

function goDown(){    //down button
    for(let i=0; i<downs.length;i++){
        downs[i].addEventListener('click',function(){
            
            let str=downs[i].parentNode.parentNode;
           
            let a=arr.indexOf(str.outerHTML);
            if(a<ups.length){
                [arr[a], arr[a+1]] = [arr[a+1], arr[a]];
            }
            
            task.innerHTML=arr.join(' ');
            
        })
        updateButtonList();
    }
}

function deleteFunc(){   //deleting a task
    for(let i=0; i<dells.length;i++){
        dells[i].addEventListener('click',function(){
            
            let str=dells[i].parentNode.parentNode;
           
            let a=arr.indexOf(str.outerHTML);
            if(a>=0){
                let b= arr.splice(a,1);
            }
            
            task.innerHTML=arr.join(' ');
        })
        updateButtonList();
        
    }
}

add.addEventListener('click',function(t){
    t=input.value;
    arr.push(card(t));
    task.innerHTML=arr.join(' ');
    input.value="";
    updateButtonList();
    
})


document.querySelector("#body").addEventListener('click',function(){
    goUp();
    goDown();
    deleteFunc();
    checkbox();
})


