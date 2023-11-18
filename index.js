const inputText = document.getElementById('title')
const createBtn = document.getElementById('crate')
const list = document.getElementById('list')

const arrayList = [
    // {titles: 'Програмировать', complite: true},
    // {titles: 'Подъебать толстого', complite: false},
    // {titles: 'Позвонить Кате', complite: false},
]

function render(){
    list.innerHTML = ''
    if (arrayList.length === 0) {
    list.innerHTML = `<p>Нет заметок</p>`
    }
    
    for (let i = 0; i < arrayList.length; i++) {
    list.insertAdjacentHTML('beforeend', getNoteTemplate(arrayList[i], i))
    }
}   

render()


createBtn.onclick = function clickFanc() {
    if (inputText.value.length === 0){
        return
    }
    const newArrayItem ={
        titles:inputText.value,
        complite:false,
    }
    arrayList.push(newArrayItem)
    render()
    inputText.value = ''
}

list.onclick = function(event) {
    if(event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
    

        if (type === 'toggle')  {
            arrayList[index].complite = !arrayList[index].complite
        } else if (type === 'remove')  {
            arrayList.splice(index, 1)
        }
    }
    render()
}

function getNoteTemplate(arrayList, index) {
    return`   
    <li 
        class="list-group-itm"
        >
        <span class="${arrayList.complite ? 'text-decoration-line-through'  : ''}">${arrayList.titles }</span>
        <span class="symbol">
        <span class="btn"><button class="btn-small btn-${arrayList.complite ? 'warning' : 'saccess'}" data-index="${index}" data-type="toggle">&check;</button></span>
        <span class="btn"><button class="btn-small btn-dunger" data-index="${index}" data-type="remove">&times;</button></span>
        </span>
    </li>
    `
}

