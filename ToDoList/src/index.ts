
let addTaskButton = document.getElementsByClassName("submit")[0]
let tasksDiv = document.getElementsByClassName("toDoList")[0]
let tasksList = document.getElementsByClassName("taskRaw")
let taskNo = 0
addTaskButton.addEventListener('click', function(event){
    event.preventDefault()
    let taskText = document.getElementById('task') as HTMLInputElement
    
    createNewTask(taskText.value)
    taskText.value = ""
})

function delTask(){
    let toRmv

    for(let i=0; i<tasksList.length; i++){
        console.log(tasksList[i])
        if (tasksList[i].getElementsByTagName("button")[0] == this){
            toRmv = i
            break
        }
    }

    tasksList[toRmv].remove()

}


function createNewTask(text: string){
    let taskRaw = document.createElement("div")
    taskRaw.classList.add("taskRaw")
    let taskPar = document.createElement("p")
    taskPar.textContent = text
    console.log(text)
    taskPar.classList.add("taskText")
    let taskDel = document.createElement("button")
    taskDel.classList.add("delTaskBtn")

    taskRaw.appendChild(taskPar)
    taskRaw.appendChild(taskDel)    
    taskRaw.classList.add(taskNo.toString())
    tasksDiv.appendChild(taskRaw)
    
    taskRaw.getElementsByTagName("button")[0].addEventListener("click" , delTask)

}