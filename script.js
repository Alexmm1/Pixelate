// Your code here

const table = document.getElementsByTagName('table')[0]
const button = document.getElementById('add-row')
const select = document.getElementsByTagName('select')[0]
let chosenColor = 'red'

button.addEventListener('click', makeRow)

select.addEventListener('change', function (event) {
    chosenColor = event.target.value
})

table.addEventListener('click', colorize)

function makeRow (){
    const row = document.createElement('tr')
    for (let i = 0; i< 20; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

function colorize (event){
    const target = event.target
    if (target.className.length) {
        target.className = ''
    } else{
        target.className =chosenColor
    }
}

table.addEventListener('mouseover', colorize)


    
