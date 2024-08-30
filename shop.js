//scrolling functions
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let viewbox = document.querySelector('.viewbox');
let arrowHover;
function ScrollLeft(){
    viewbox.scrollLeft -=1;
}
function ScrollRight(){
    viewbox.scrollLeft +=1;
}
leftArrow.addEventListener('mouseover', function(){
    console.log('mouse is hovering');
    arrowHover = setInterval(ScrollLeft, 1)
})
leftArrow.addEventListener('mouseout', function(){
    console.log('mouse is off');
    clearInterval(arrowHover)
})
rightArrow.addEventListener('mouseover', function(){
    console.log('mouse is hovering');
    arrowHover = setInterval(ScrollRight, 1);
})
rightArrow.addEventListener('mouseout', function(){
    console.log('mouse is off');
    clearInterval(arrowHover);
})