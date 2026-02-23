// ["djf","dheuh"]
let form = document.querySelector("form");
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [];
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let inpData = form[0].value;
    todo.push(inpData)
    localStorage.setItem('todo',JSON.stringify
        (todo))
    location.reload()
})
todo.map((data, index) => {
    document.querySelector("tbody").innerHTML +=`
    <tr>
    
    <td> <input type ="checkbox" class="mp1"></input>${data} </td>
    <td onclick="del(${index})">delete</td>
    </tr>
    `;

})
function del(e){
    let deleted = todo.filter((data,index)=>{
        return index!==e;
    })
    localStorage.setItem('todo', JSON.stringify(deleted))
    location.reload()
}
todo.document.querySelector('.mp1').addEventListener('change', function(){
    if(this.checked){
        todo.querySelector(index).style.textDecoration = "line-through";

    }
    else{
        todo.querySelector(index).style.textDecoration="none";
    }
})