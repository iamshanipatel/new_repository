 

 document.getElementById("inp-btn").addEventListener("click", function(){
    const task = document.getElementById("inp-text").value
    if(task === ""){
        alert("enter text")
    }
    else{
        const newtask = document.createElement("p")
        newtask.innerHTML= `<input type="checkbox" class ="checkbox-btn"></input>
         <span>${task}</span>
        <button class="delete-btn"> delete</button>`
        
        newtask.querySelector(".delete-btn").addEventListener("click", function(){
            newtask.remove()
        })

        newtask.querySelector(".checkbox-btn").addEventListener('change', function(){
            
        
        if(this.checked){
            newtask.querySelector("span").style.textDecoration ="line-through";

        }
        else{
            newtask.querySelector("span").style.textDecoration ="none";
        }
        })
    
    document.getElementById("cont").prepend(newtask)
    document.getElementById("inp-text").value = ""
    }
    // localStorage.setItem("a","windows");
    // localStorage.setItem("tasks",'[1]');
    // localStorage.setItem("tasks",[1,2,'dsfscscs'])


    let s=new Array(localStorage.getItem("tasks"));
    console.log("ssssssss",s)
    s.push(task)
    localStorage.setItem("tasks",s)
}) 




