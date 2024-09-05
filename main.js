let input = document.getElementById("input");
let ul = document.getElementById("list");
let btn = document.getElementById("btn1");


  btn.addEventListener('click',function(){
    let value = input.value;
    if(value !==''){
        let li = document.createElement("li");
        let delBtn = document.createElement('button');
        li.textContent = value;
        delBtn.textContent = "Delete";
        delBtn.id='del';
        delBtn.addEventListener('click',function(){
            li.remove()
        })
        ul.appendChild(li);
        li.appendChild(delBtn)
    }
  })
  