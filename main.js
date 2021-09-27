
var generateBtn = document.querySelector('#generate__btn')
var container = document.querySelector('.container')
var r, g, b
var color
var savedColorList = []

generateBtn.addEventListener('click', generate)

function generate() {
    function generateColor() {
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        return color = 'rgb(' + r + ',' + g + ',' + b + ')'
    }
    generateColor()



    function createBox() {

        var colorBox = document.createElement('div')
        container.appendChild(colorBox);
        colorBox.classList.add('colorBox')
        colorBox.style.backgroundColor = color




        function createSaveBtn() {
            var saveBtn = document.createElement('button')
            saveBtn.innerHTML = 'SAVE'
            container.appendChild(saveBtn);
            saveBtn.classList.add('saveBtn')
            saveBtn.addEventListener('click', saveFunc)

        }

        createSaveBtn()




    }

    if (!document.querySelector('.colorBox')) {
        createBox()
    } else {
        document.querySelector('.colorBox').style.backgroundColor = color
    }
    return color
}

function saveFunc() {
    if (!document.querySelector('.saveList')) {
        let saveList = document.createElement('ul')
        container.appendChild(saveList);
        saveList.classList.add('saveList')
        createItem()
    } else {
        if (savedColorList.indexOf(color) == -1) {
            createItem()
        } else {
            alert('you have already saved this color')
        }
    }



}



function createItem() {
    var savedItem = document.createElement('li')
    document.querySelector('.saveList').appendChild(savedItem);
    savedItem.classList.add('savedItem')
    savedItem.style.backgroundColor = color


    function pushColor() {
        savedColorList.push(color)


    }

    function createSaveBtn() {
        var deleteBtn = document.createElement('a')

        savedItem.appendChild(deleteBtn);
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click', deleteFunc)
    }
    createSaveBtn()
    pushColor()


}




function deleteFunc() {
    this.parentElement.remove()

    for (var i = 0; i < savedColorList.length; i++) {
        if (savedColorList[i] == this.parentElement.style.backgroundColor.replace(/\s+/g, '')) {
            savedColorList.splice(i, 1);
        }
    }
    if (savedColorList.length === 0) {
        document.querySelector('.saveList').remove()
    }
}

