let todoAdd = document.querySelector('input#todoadd')
let todoInput = document.querySelector('input#todoinput')

// add event listener
todoAdd.addEventListener('click', () => {
    if (todoInput.value == '' || todoInput.value == undefined){
        document.querySelector('p.error').innerText = 'Please input something on field'
        document.querySelector('p.error').style.visibility = 'visible'
    }
    else {
        
        document.querySelector('p.error').style.visibility = 'hidden'

        // id function

        function id(){
            let ident = ''
            let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321'
            for (let a = 0; a < 12; a++){
                let rand = Math.floor(Math.random() * chars.length)
                ident += chars[rand]
            }
            return ident
        }
        let identification = id()

        disp(todoInput.value, identification)
    }
})

document.body.onload = loaded

function loaded(){
    Object.keys(localStorage).forEach(key => {
        let internal = localStorage.getItem(key)
        disp(internal, key)
    })
}

function disp(input, identification){
    let todoitemDiv = document.createElement('div')
    todoitemDiv.className = 'todoitem'
    
    let sw = 0
    todoitemDiv.addEventListener('click', () => {
        
        if (sw == 1){
            todoitemDiv.style.background = ''
            todoItem.style.textDecoration = ''
            todoItem.style.fontStyle = ''
            sw = 0
            
            localStorage.setItem(identification, input)
        }
        else{
            todoitemDiv.style.background = 'rgb(185, 185, 185)'
            todoItem.style.textDecoration = 'line-through'
            todoItem.style.fontStyle = 'italic'
            sw = 1
            
            localStorage.removeItem(identification)
        }
    })

    todoitemDiv.dataset.identity = identification
    todoitemDiv.dataset.done = 0

    let todoItem = document.createElement('p')
    todoItem.innerText = input

    let todoactioDiv = document.createElement('div')
    todoactioDiv.className = 'todoaction'

    let todoactionDel = document.createElement('button')
    todoactionDel.textContent = 'Del'
    todoactionDel.addEventListener('click', () => {
        todoitemDiv.remove()
        localStorage.removeItem(identification)

    })

    todoactioDiv.append(todoactionDel)

    todoitemDiv.append(todoItem, todoactioDiv)

    localStorage.setItem(identification, input)

    document.querySelector('div.results').append(todoitemDiv)
    todoInput.value = ''
}



























