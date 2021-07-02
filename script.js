
function verde(){
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('laranja');
    
    document.querySelector('#exemplo').classList.add('verde');
}

function azul(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('laranja');
    
    document.querySelector('#exemplo').classList.add('azul');
}

function laranja(){
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');


    document.querySelector('#exemplo').classList.add('laranja');
}
