let ImageChange = document.querySelectorAll('.slide-container');
let index = 0;

function next (){
    ImageChange[index].classList.remove('active');
    index = (index + 1) % ImageChange.length;
    ImageChange[index].classList.add('active');
}

function prev (){
    ImageChange[index].classList.remove('active');
    index = (index - 1 + ImageChange.length) % ImageChange.length;
    ImageChange[index].classList.add('active');
}