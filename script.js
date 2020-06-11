const gridBoxes = document.getElementsByClassName("grid-box")

function setRed() { 
    const red = "red";
    for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', () => {
        gridBoxes[i].style.backgroundColor = red; 
    })
    }
}

function setGreen() { 
    const green = "green";
    for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', () => {
        gridBoxes[i].style.backgroundColor = green; 
    })
    }
}

function setBlue() { 
    const blue = "blue";
    for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', () => {
        gridBoxes[i].style.backgroundColor = blue; 
    })
    }
}

function clearGrid() {
    const black = "black";
    for(let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].style.backgroundColor = black; 
    }
}
