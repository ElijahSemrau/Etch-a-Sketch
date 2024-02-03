// //creates main container
const container = document.querySelector('.container');

//input number
let boxes = 16;



//function to create a column of divs
function createDivColumn(){
    let div = document.createElement('div');
    div.classList.add('column');
    return div;
}

//Function to create a row of divs
function createDivRow(){
    let div = document.createElement('div');
    div.classList.add('row');
    return div;
}



//Creates the necessary amount of boxes depending upon input
function grid(boxes){

    //Deletes the old grid when a new grid is created
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //Creates the grid
    for (i = 0; i < boxes; i++) {
        let row = createDivRow();
        container.appendChild(row);
        for (j = 0; j < boxes; j++){
            let column = createDivColumn();
            row.appendChild(column);
        }
    }
}

//Creates the initial grid
grid(boxes);

//Accesses the button
document.querySelector('#button');

//Event listener for button handling accepting the new number for the grid
button.addEventListener('click', function() {
    const userInput = prompt('Enter box size:');
    if (userInput <= 100 && userInput > 0){
        boxes = userInput;

        //Recreates the grid to the new size
        grid(boxes);

    } else {

        //alerts the user if the input number is not between 1-100
        window.alert("Enter a number between 1-100.");
    }

    console.log({boxes});
  });



//function to add highlighted class to the hovered object
function addHighlight(target) {
    if (target.classList.contains('column'))
        {
        target.classList.add('highlighted');
    }
}



//Event listener for mousing over an object to add the highlight
window.addEventListener('mouseover',function(e) {
    addHighlight(e.target);
});

