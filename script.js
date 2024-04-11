let todoList = [{ item:'go to school',date: '27-03-2005'},
{item:'go to school',date: '27-03-2005'}]
displayItems()
function addTodo() {
    let inputItem = document.querySelector('#input-item').value
    document.querySelector('#input-item').value = ''
    let inputDate = document.querySelector('#input-date').value
    document.querySelector('#input-date').value=''
    
    todoList.push({ item: inputItem, date: inputDate }) 
    displayItems()
}

function displayItems() {
    let containerElement=document.querySelector('#todo-container')
    let newHtml = ''

    for (let i = 0; i < todoList.length; i++){
        newHtml += `
        <span>${todoList[i].item}</span>
        <span>${todoList[i].date}</span>
        <button class='todo-delete' onclick='todoList.splice(${i},1);
        displayItems();console.log(${i })'>Delete</button>
        `

       
    }
    containerElement.innerHTML=newHtml
}