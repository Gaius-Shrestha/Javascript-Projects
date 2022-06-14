let myList=[]
let myOldList=[]
const inputEl= document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const ListFromLocalStorage = JSON.parse(localStorage.getItem("myList"))

if (ListFromLocalStorage){
    myList = ListFromLocalStorage
    render(myList)
}

function render(list){

    let listItems=""
    for (let i=0;i<list.length;i++){
        
        listItems += `
        <li>
        <input type="checkbox">
        ${list[i]} 
        </li>
        `
    }

    ulEl.innerHTML=listItems
}

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myList=[]
    render(myList)
}
)

inputBtn.addEventListener("click",function()
{
    myList.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myList",JSON.stringify(myList))
    render(myList)
}
)