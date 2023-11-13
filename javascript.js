var gridSize;

let button = document.getElementById('Submit');
button.addEventListener("click", submitButtonPressed);

function submitButtonPressed(){

    console.log("Submission Recieved")

    gridSize = document.querySelector('Input').value;

    var gridContainer = document.getElementById('myGrid');
    
    console.log(gridSize + "x" + gridSize + " is the grid size");

    for (let sizeX = 0; sizeX < gridSize; sizeX++){
        for (let sizeY = 0; sizeY < gridSize; sizeY++){

            const gridItem = document.createElement('div');
            gridItem.className = 'gridItemState0';
            function gridItemSelected (){
                gridItem.className = 'gridItemState1';
            }
            gridItem.addEventListener("mouseenter", gridItemSelected);
            gridContainer.appendChild(gridItem);
        }
    }
}