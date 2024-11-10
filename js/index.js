document.addEventListener("DOMContentLoaded" , ()=>{

    //read main div and button in a variable 
    let main = document.querySelector(".main")
    let a = main.querySelector("#addBut")
    const addItem = ()=>{
        //read to-do list container in a variable
        let addTo = main.querySelector(".addTo")

        //read input element in a variable and its value in another 
        let txtEle = main.querySelector("#addText")
        let txt = txtEle.value

        //create div element to add to-do list
        let toDo = document.createElement("div")

        //give class to div element
        toDo.classList.add('item')

        //create span element to add to-do content
        let spanTodo = document.createElement("span")
        spanTodo.textContent = txt

        //give class to span with todo-item
        spanTodo.classList.add('list')

        //create span element to delete to-do content
        let removeTodo = document.createElement("span")
        removeTodo.textContent = "  delete"

        //give class to span with delete button
        removeTodo.classList.add('deleteBut')

        //attach event listener to delete to-do content
        removeTodo.addEventListener("click" , (ev)=>{

            //access parent element of span 'delete' and remove it  
            ev.target.parentElement.remove() 
        
        })

        //append content and delete inside newly created div element
        toDo.appendChild(spanTodo)
        toDo.appendChild(removeTodo)

        //add to-do item inside main to-do list 
        addTo.appendChild(toDo)

        //reset the value of input 
        txtEle.value = ""
    }

    //attach event listener to button 'a'
    a.addEventListener("click" , ()=>{
        addItem()
    })

    //attach event listener to "Enter" keypress
    document.addEventListener("keydown",(event)=>{
        if(event.code=="Enter"){
           addItem()
        }
    })       
})