//intialize count as 0 
//listen for clicks on the increment button
//inccrement the count variable when the button is clicked
//change the count-el in the html and reflect the new coun

let countEl = document.getElementById("count-el")
let savelEl=document.getElementById("save-el")
let count=0
let saveel=0

function increment(){
    console.log("clicked")
    count+=1
    countEl.textContent=count
    console.log(count)
}

function save(){
    let countStr = count +" - "
    savelEl.textContent += countStr
    console.log("saved :" ,count)
    countEl.textContent =0
    count=0

}






