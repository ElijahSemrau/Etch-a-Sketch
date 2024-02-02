//creates main container
const container = document.querySelector('.container');

//Creates container divs to hold square divs
const container1 = document.createElement('div');
const container2 = document.createElement('div');
const container3 = document.createElement('div');
const container4 = document.createElement('div');

//adds containers to a  container group to organize all containers for each div group
container1.classList.add('eContainers');
container2.classList.add('eContainers');
container3.classList.add('eContainers');
container4.classList.add('eContainers');

//Creates all of the div square elements
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');
const div13 = document.createElement('div');
const div14 = document.createElement('div');
const div15 = document.createElement('div');
const div16 = document.createElement('div');


//Adds first four divs to their own group
div1.classList.add('column1');
div2.classList.add('column1');
div3.classList.add('column1');
div4.classList.add('column1');

//Adds second four divs to their own group
div5.classList.add('column2');
div6.classList.add('column2');
div7.classList.add('column2');
div8.classList.add('column2');

//Adds third four divs to their own group
div9.classList.add('column3');
div10.classList.add('column3');
div11.classList.add('column3');
div12.classList.add('column3');

//Adds fourth four divs to their own group
div13.classList.add('column4');
div14.classList.add('column4');
div15.classList.add('column4');
div16.classList.add('column4');

//Makes all container groups children of the main container
container.appendChild(container1);
container.appendChild(container2);
container.appendChild(container3);
container.appendChild(container4);

//Groups the first set of div squares to their own container
container1.appendChild(div1);
container1.appendChild(div2);
container1.appendChild(div3);
container1.appendChild(div4);

//Groups the second set of div squares to their own container
container2.appendChild(div5);
container2.appendChild(div6);
container2.appendChild(div7);
container2.appendChild(div8);

//Groups the third set of div squares to their own container
container3.appendChild(div9);
container3.appendChild(div10);
container3.appendChild(div11);
container3.appendChild(div12);

//Groups the fourth set of div squares to their own container
container4.appendChild(div13);
container4.appendChild(div14);
container4.appendChild(div15);
container4.appendChild(div16);

//function to add highlighted class to the hovered object
function addHighlight(target) {
    if (target.classList.contains('column1') || target.classList.contains('column2') || target.classList.contains('column3') || target.classList.contains('column4'))
        {
        target.classList.add('highlighted');
    }
}

//function to remove highlighted class
function removeHighlight(target) {
    target.classList.remove('highlighted');
}

//Event listener for mousing over an object to add the highlight
window.addEventListener('mouseover',function(e) {
    addHighlight(e.target);
});

//Event listener for mousing out from an object to remove the highlight
window.addEventListener('mouseout',function(e) {
    removeHighlight(e.target);
});

